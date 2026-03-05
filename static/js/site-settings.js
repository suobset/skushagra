(function () {
  var THEME_KEY = "site-theme";
  var CRT_KEY = "site-crt";
  var VIM_KEY = "site-vim";
  var TRANSPARENCY_KEY = "site-glass-reduce-transparency";
  var GLASS_BG_SEED_KEY = "site-glass-bg-seed";
  var GLASS_BG_VARIANTS = ["aurora", "violet", "nebula", "iris", "dusk"];
  var THEMES = ["terminal", "news", "swiss", "glass"];
  var root = document.documentElement;
  var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var state = {
    theme: "terminal",
    crt: false,
    vim: false,
    reduceTransparency: false
  };
  var vimSelectionIndex = -1;

  function readSetting(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeSetting(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function prefersLight() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  }

  function isTextInput(element) {
    if (!element) {
      return false;
    }
    var tag = element.tagName;
    return (
      element.isContentEditable ||
      tag === "INPUT" ||
      tag === "TEXTAREA" ||
      tag === "SELECT"
    );
  }

  function applyRootAttrs() {
    root.setAttribute("data-theme", state.theme);
    root.setAttribute("data-vim", state.vim ? "on" : "off");
    root.setAttribute("data-transparency", state.reduceTransparency ? "reduced" : "normal");
    var crtEnabled = state.crt && !reducedMotionQuery.matches;
    root.setAttribute("data-crt", crtEnabled ? "on" : "off");
  }

  function ensureGlassBackgroundVariant() {
    var seed = readSetting(GLASS_BG_SEED_KEY);
    if (!seed) {
      seed = String(Date.now());
      writeSetting(GLASS_BG_SEED_KEY, seed);
    }
    var hash = 0;
    for (var i = 0; i < seed.length; i += 1) {
      hash = (hash * 31 + seed.charCodeAt(i)) % 2147483647;
    }
    root.setAttribute("data-glass-bg", GLASS_BG_VARIANTS[Math.abs(hash) % GLASS_BG_VARIANTS.length]);
  }

  function loadInitialState() {
    var savedTheme = readSetting(THEME_KEY);
    if (savedTheme && THEMES.indexOf(savedTheme) !== -1) {
      state.theme = savedTheme;
    } else {
      state.theme = prefersLight() ? "news" : "terminal";
    }

    state.crt = readSetting(CRT_KEY) === "on";
    state.vim = readSetting(VIM_KEY) === "on";
    state.reduceTransparency = readSetting(TRANSPARENCY_KEY) === "on";
    applyRootAttrs();
  }

  function syncSettingsUI() {
    var themeInputs = document.querySelectorAll('input[name="theme"]');
    themeInputs.forEach(function (input) {
      input.checked = input.value === state.theme;
    });

    var crtInput = document.getElementById("setting-crt");
    var vimInput = document.getElementById("setting-vim");
    var transparencyInput = document.getElementById("setting-reduce-transparency");
    var glassOnlyRow = document.getElementById("glass-only-setting");

    if (crtInput) {
      crtInput.checked = state.crt;
      crtInput.disabled = reducedMotionQuery.matches;
    }
    if (vimInput) {
      vimInput.checked = state.vim;
    }
    if (transparencyInput) {
      transparencyInput.checked = state.reduceTransparency;
    }
    if (glassOnlyRow) {
      glassOnlyRow.hidden = state.theme !== "glass";
    }
  }

  function closeMenu(dropdown) {
    if (!dropdown) {
      return;
    }
    dropdown.classList.remove("open");
    var button = dropdown.querySelector("[data-menu-toggle]");
    var menu = dropdown.querySelector(".dropdown-menu");
    if (button) {
      button.setAttribute("aria-expanded", "false");
    }
    if (menu) {
      menu.hidden = true;
    }
  }

  function openMenu(dropdown) {
    if (!dropdown) {
      return;
    }
    dropdown.classList.add("open");
    var button = dropdown.querySelector("[data-menu-toggle]");
    var menu = dropdown.querySelector(".dropdown-menu");
    if (button) {
      button.setAttribute("aria-expanded", "true");
    }
    if (menu) {
      menu.hidden = false;
    }
  }

  function closeAllMenus(except) {
    document.querySelectorAll("[data-dropdown]").forEach(function (dropdown) {
      if (!except || dropdown !== except) {
        closeMenu(dropdown);
      }
    });
  }

  function bindDropdownMenus() {
    document.querySelectorAll("[data-dropdown]").forEach(function (dropdown) {
      var button = dropdown.querySelector("[data-menu-toggle]");
      var menu = dropdown.querySelector(".dropdown-menu");
      if (!button || !menu) {
        return;
      }

      button.addEventListener("click", function () {
        var isOpen = dropdown.classList.contains("open");
        closeAllMenus(dropdown);
        if (isOpen) {
          closeMenu(dropdown);
        } else {
          openMenu(dropdown);
        }
      });

      button.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeMenu(dropdown);
          button.focus();
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
          openMenu(dropdown);
          var firstFocusable = menu.querySelector("a, button, input");
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      });

      menu.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeMenu(dropdown);
          button.focus();
          return;
        }
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
          return;
        }
        var items = Array.prototype.slice.call(menu.querySelectorAll("a, button, input"));
        var activeIndex = items.indexOf(document.activeElement);
        if (activeIndex === -1) {
          return;
        }
        event.preventDefault();
        var nextIndex = event.key === "ArrowDown" ? activeIndex + 1 : activeIndex - 1;
        if (nextIndex < 0) {
          nextIndex = items.length - 1;
        } else if (nextIndex >= items.length) {
          nextIndex = 0;
        }
        items[nextIndex].focus();
      });
    });

    document.addEventListener("click", function (event) {
      var target = event.target;
      var parentDropdown = target.closest("[data-dropdown]");
      closeAllMenus(parentDropdown);
    });
  }

  function bindSettings() {
    var themeInputs = document.querySelectorAll('input[name="theme"]');
    var crtInput = document.getElementById("setting-crt");
    var vimInput = document.getElementById("setting-vim");
    var transparencyInput = document.getElementById("setting-reduce-transparency");

    themeInputs.forEach(function (input) {
      input.addEventListener("change", function () {
        if (THEMES.indexOf(input.value) === -1) {
          return;
        }
        state.theme = input.value;
        writeSetting(THEME_KEY, state.theme);
        applyRootAttrs();
        syncSettingsUI();
      });
    });

    if (crtInput) {
      crtInput.addEventListener("change", function () {
        state.crt = !!crtInput.checked;
        writeSetting(CRT_KEY, state.crt ? "on" : "off");
        applyRootAttrs();
      });
    }

    if (vimInput) {
      vimInput.addEventListener("change", function () {
        state.vim = !!vimInput.checked;
        writeSetting(VIM_KEY, state.vim ? "on" : "off");
        applyRootAttrs();
      });
    }

    if (transparencyInput) {
      transparencyInput.addEventListener("change", function () {
        state.reduceTransparency = !!transparencyInput.checked;
        writeSetting(TRANSPARENCY_KEY, state.reduceTransparency ? "on" : "off");
        applyRootAttrs();
      });
    }

    var onReducedMotionChanged = function () {
      applyRootAttrs();
      syncSettingsUI();
    };
    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", onReducedMotionChanged);
    } else if (typeof reducedMotionQuery.addListener === "function") {
      reducedMotionQuery.addListener(onReducedMotionChanged);
    }
  }

  function bindPaginationInput() {
    var inputs = document.querySelectorAll(".pagination-input[data-base-url]");
    inputs.forEach(function (input) {
      input.addEventListener("change", function () {
        var page = parseInt(input.value, 10);
        var max = parseInt(input.max, 10);
        if (Number.isNaN(page) || Number.isNaN(max) || page < 1 || page > max) {
          input.value = String(Math.min(Math.max(page || 1, 1), max || 1));
          return;
        }
        var baseUrl = input.dataset.baseUrl;
        if (!baseUrl) {
          return;
        }
        if (page === 1) {
          window.location.href = baseUrl;
          return;
        }
        var url = baseUrl.replace(/\/$/, "") + "/page/" + page + "/";
        window.location.href = url;
      });
    });
  }

  function selectedPostItems() {
    return Array.prototype.slice.call(document.querySelectorAll(".post-list .post-item"));
  }

  function moveVimSelection(nextIndex) {
    var items = selectedPostItems();
    if (!items.length) {
      return;
    }
    if (nextIndex < 0) {
      nextIndex = 0;
    }
    if (nextIndex >= items.length) {
      nextIndex = items.length - 1;
    }
    items.forEach(function (item, index) {
      var link = item.querySelector(".post-link");
      item.classList.toggle("is-selected", index === nextIndex);
      if (!link) {
        return;
      }
      if (index === nextIndex) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    vimSelectionIndex = nextIndex;
    items[nextIndex].scrollIntoView({ block: "nearest" });
  }

  function bindVimKeys() {
    document.addEventListener("keydown", function (event) {
      if (!state.vim) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey || isTextInput(document.activeElement)) {
        return;
      }

      var items = selectedPostItems();
      if (!items.length) {
        return;
      }

      if (event.key === "j") {
        event.preventDefault();
        moveVimSelection(vimSelectionIndex < 0 ? 0 : vimSelectionIndex + 1);
        return;
      }
      if (event.key === "k") {
        event.preventDefault();
        moveVimSelection(vimSelectionIndex < 0 ? 0 : vimSelectionIndex - 1);
        return;
      }
      if (event.key === "Enter" && vimSelectionIndex >= 0) {
        event.preventDefault();
        var current = items[vimSelectionIndex].querySelector(".post-link");
        if (current) {
          current.click();
        }
        return;
      }
      if (event.key === "g") {
        if (bindVimKeys.lastG && Date.now() - bindVimKeys.lastG < 450) {
          event.preventDefault();
          moveVimSelection(0);
        }
        bindVimKeys.lastG = Date.now();
        return;
      }
      if (event.key === "G") {
        event.preventDefault();
        moveVimSelection(items.length - 1);
      }
    });
  }

  function bindCodeCopyButtons() {
    var blocks = document.querySelectorAll(".post-content pre");
    blocks.forEach(function (pre, index) {
      var code = pre.querySelector("code");
      if (!code) {
        return;
      }
      var button = document.createElement("button");
      button.type = "button";
      button.className = "copy-code-btn";
      button.setAttribute("aria-label", "Copy code block");
      button.textContent = "Copy";
      button.addEventListener("click", function () {
        var text = code.innerText || "";
        var write = navigator.clipboard && typeof navigator.clipboard.writeText === "function"
          ? navigator.clipboard.writeText(text)
          : Promise.reject();
        write.then(function () {
          button.textContent = "Copied";
          window.setTimeout(function () {
            button.textContent = "Copy";
          }, 1100);
        }).catch(function () {
          button.textContent = "Copy failed";
          window.setTimeout(function () {
            button.textContent = "Copy";
          }, 1200);
        });
      });
      pre.dataset.codeIndex = String(index);
      pre.appendChild(button);
    });
  }

  function bindGlassSpecularPointer() {
    var pending = false;
    var nextX = 50;
    var nextY = 16;

    function applySpecular() {
      pending = false;
      root.style.setProperty("--glass-spec-x", nextX + "%");
      root.style.setProperty("--glass-spec-y", nextY + "%");
    }

    function onPointerMove(event) {
      if (state.theme !== "glass" || reducedMotionQuery.matches) {
        return;
      }
      var viewportWidth = window.innerWidth || 1;
      var viewportHeight = window.innerHeight || 1;
      nextX = Math.max(0, Math.min(100, (event.clientX / viewportWidth) * 100));
      nextY = Math.max(0, Math.min(100, (event.clientY / viewportHeight) * 100));
      if (!pending) {
        pending = true;
        window.requestAnimationFrame(applySpecular);
      }
    }

    function onPointerLeave() {
      if (state.theme !== "glass" || reducedMotionQuery.matches) {
        return;
      }
      nextX = 50;
      nextY = 16;
      if (!pending) {
        pending = true;
        window.requestAnimationFrame(applySpecular);
      }
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
  }

  loadInitialState();
  ensureGlassBackgroundVariant();

  document.addEventListener("DOMContentLoaded", function () {
    bindDropdownMenus();
    bindSettings();
    syncSettingsUI();
    bindPaginationInput();
    bindVimKeys();
    bindCodeCopyButtons();
    bindGlassSpecularPointer();
  });
})();
