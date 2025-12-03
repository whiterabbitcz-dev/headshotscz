import os

import requests

from bs4 import BeautifulSoup

from urllib.parse import urljoin, urlparse

import markdownify



# --- KONFIGURACE ---

SOURCE_URL = "https://www.headshots.cz/"

OUTPUT_DIR = "migration_data"

IMAGES_DIR = os.path.join(OUTPUT_DIR, "images")



# Hlavička, abychom nevypadali jako bot (některé servery to blokují)

HEADERS = {

    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

}



def setup_directories():

    if not os.path.exists(OUTPUT_DIR):

        os.makedirs(OUTPUT_DIR)

    if not os.path.exists(IMAGES_DIR):

        os.makedirs(IMAGES_DIR)

    print(f"📂 Složky připraveny: {OUTPUT_DIR}")



def download_image(img_url):

    try:

        response = requests.get(img_url, headers=HEADERS, stream=True)

        if response.status_code == 200:

            # Získání názvu souboru z URL

            filename = os.path.basename(urlparse(img_url).path)

            if not filename:

                filename = "image_unknown.jpg"

            

            # Ošetření přípon a query parametrů

            if "?" in filename:

                filename = filename.split("?")[0]

            if not os.path.splitext(filename)[1]:

                filename += ".jpg"



            filepath = os.path.join(IMAGES_DIR, filename)

            

            with open(filepath, 'wb') as f:

                for chunk in response.iter_content(1024):

                    f.write(chunk)

            print(f"  ✅ Staženo: {filename}")

        else:

            print(f"  ❌ Chyba stahování {img_url}: Status {response.status_code}")

    except Exception as e:

        print(f"  ❌ Chyba u {img_url}: {e}")



def scrape_site():

    print(f"🚀 Začínám skenovat: {SOURCE_URL}")

    

    try:

        response = requests.get(SOURCE_URL, headers=HEADERS)

        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')



        # 1. Uložení HTML struktury (pro referenci rozložení)

        html_path = os.path.join(OUTPUT_DIR, "structure.html")

        with open(html_path, "w", encoding="utf-8") as f:

            f.write(soup.prettify())

        print(f"📄 HTML struktura uložena do: {html_path}")



        # 2. Uložení obsahu jako Markdown (pro lepší čitelnost AI při psaní nového webu)

        md_content = markdownify.markdownify(str(soup), heading_style="ATX")

        md_path = os.path.join(OUTPUT_DIR, "content.md")

        with open(md_path, "w", encoding="utf-8") as f:

            f.write(md_content)

        print(f"📝 Textový obsah uložen do: {md_path}")



        # 3. Stahování obrázků

        print("🖼️ Hledám obrázky...")

        images = soup.find_all('img')

        img_urls = set()



        for img in images:

            src = img.get('src')

            if src:

                # Převedení relativní URL na absolutní

                full_url = urljoin(SOURCE_URL, src)

                img_urls.add(full_url)



        print(f"Nalezeno {len(img_urls)} unikátních obrázků. Stahuji...")

        

        for url in img_urls:

            download_image(url)



    except requests.exceptions.RequestException as e:

        print(f"🛑 Kritická chyba při načítání stránky: {e}")



if __name__ == "__main__":

    setup_directories()

    scrape_site()

    print("\n✨ Hotovo! Nyní můžeš složku 'migration_data' použít pro White Rabbit workflow.")


