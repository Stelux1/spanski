"""Genera las imágenes optimizadas (WebP responsive + OG) a partir de src/img-source.

Uso:  python3 tools/images.py
Salida: public/img/<nombre>-<ancho>.webp  y  public/img/og-qualinor.jpg
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src" / "img-source"
OUT = ROOT / "public" / "img"
OUT.mkdir(parents=True, exist_ok=True)

# nombre: (recorte relativo (l, t, r, b) o None, anchos)
JOBS = {
    "sala-bombas-colectores-pead": (None, [480, 800, 1200]),
    "colector-valvulas-pead": (None, [480, 800, 1200]),
    "soldadura-tope-pead-obra": (None, [480, 800, 1280]),
    "skid-bombeo-tuberias-pead": (None, [480, 720]),
    # recorte para eliminar la marca de fecha de la cámara (esquina inferior)
    "zanja-tuberia-pead-gran-diametro": ((0, 0.08, 1, 0.83), [480, 800, 1200, 1600]),
    "planta-biogas-tuberias-pead": (None, [480, 800, 1200]),
}


def crop_rel(im, box):
    w, h = im.size
    l, t, r, b = box
    return im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))


for name, (box, widths) in JOBS.items():
    im = ImageOps.exif_transpose(Image.open(SRC / f"{name}.jpg")).convert("RGB")
    if box:
        im = crop_rel(im, box)
    for w in widths:
        w = min(w, im.width)
        h = round(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(OUT / f"{name}-{w}.webp", "WEBP", quality=78, method=6)
    print(name, im.size)

# Imagen Open Graph 1200x630
og = ImageOps.exif_transpose(Image.open(SRC / "zanja-tuberia-pead-gran-diametro.jpg")).convert("RGB")
og = crop_rel(og, (0, 0.08, 1, 0.83))
og = ImageOps.fit(og, (1200, 630), Image.LANCZOS, centering=(0.6, 0.5))
og.save(OUT / "og-qualinor.jpg", "JPEG", quality=82, optimize=True, progressive=True)
print("og ok")
