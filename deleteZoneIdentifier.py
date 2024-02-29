# Script to delete the Zone Identifier spam Windows loves so much when trying to work on WSL.
# Kush S. | 9/18/2023

import os

def delete_files_with_extension(directory, extension):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(extension):
                file_path = os.path.join(root, file)
                try:
                    os.remove(file_path)
                    print(f"Deleted: {file_path}")
                except Exception as e:
                    print(f"Error deleting {file_path}: {e}")

if __name__ == "__main__":
    target_directory = "./"
    file_extension = "Zone.Identifier"

    if os.path.isdir(target_directory):
        delete_files_with_extension(target_directory, file_extension)
        print(f"All {file_extension} files have been deleted.")
    else:
        print("The specified directory does not exist.")