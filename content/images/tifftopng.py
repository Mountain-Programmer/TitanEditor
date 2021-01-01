import wand
from wand.image import Image
import glob
import os

for file in glob.glob("*.tiff"):
    with Image(filename=file) as original:
        with original.convert('png') as converted:
            converted.save(filename=file.replace(".tiff", ".png"))
            print(file, 'to png')
            os.remove(file)
            
