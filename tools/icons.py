"""Genera favicon.svg, favicons PNG y el logo PNG (para schema.org) en public/.
Marca: cuadrado oliva con la sección de un tubo (anillo). Uso: python3 tools/icons.py
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"
(PUB / "img").mkdir(parents=True, exist_ok=True)
BG, FG = (68, 72, 53), (248, 248, 241)  # oliva + crema


def mark(size):
    s = size * 4  # supersampling
    im = Image.new("RGB", (s, s), BG)
    d = ImageDraw.Draw(im)
    r_out, r_in = s * (11.75 / 32), s * (7.25 / 32)
    c = s / 2
    d.ellipse((c - r_out, c - r_out, c + r_out, c + r_out), fill=FG)
    d.ellipse((c - r_in, c - r_in, c + r_in, c + r_in), fill=BG)
    return im.resize((size, size), Image.LANCZOS)


mark(32).save(PUB / "favicon-32.png")
mark(180).save(PUB / "apple-touch-icon.png")
mark(512).save(PUB / "icon-512.png")
mark(512).save(PUB / "img" / "logo-qualinor.png")
(PUB / "favicon.svg").write_text(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">'
    '<rect width="32" height="32" rx="7" fill="#444835"/>'
    '<circle cx="16" cy="16" r="9.5" fill="none" stroke="#F8F8F1" stroke-width="4.5"/></svg>\n'
)
print("iconos ok")
