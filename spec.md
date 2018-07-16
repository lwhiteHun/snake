# Fejlesztői leírás

## Technológia
* JavaScript
* HTML
* CSS

## Játéktér leírása
* Egy div, ami magába foglalja a többi divet, amelyek display inline beállításúak.
* A méretezést egy függvénnyel oldjuk meg, amely lefut egyszer az oldal megnyitásakor majd akkor is, ha átméretezik az oldalt.
* A négyzetek szélességét százalékosan adjuk meg.
* Egy legördülő menüben lehet kiválasztani a játéktér szélességét.
* A "tile" osztályhoz rendeljük az egyes csempéket.
* Az eledel csempe osztálya "food", a kígyó csempe osztálya pedig "snake", az üres csempe osztálya pedig "empty" legyen.

## A kígyó mozgása
* Az új játék gomb hatására a kígyó középen megjelenik.
* Azonnal indul a kígyó jobbra.
* Lépésenkénti ellenőrzés: a csempe osztályát vizsgáljuk. Ha snake az osztály, legyen vége a játéknak. Ha food az osztály, akkor nő egyet a kígyó. Ha nincs olyan csempe, ahová lépni akar a fej, akkor vége a játéknak.
* Irányítás: keydown eseményre változtajuk az irányt.
* Óraütésre mindig elvégezzük az összes ellenőrzést egy metódusban.
* A kígyó testét egy tömbben tároljuk és lépés esetén minden tömb elem az előző helyébe lép.

## Pontok és eledel
* A points változóban tároljuk az aktuális pontokat.
* Egy eledel egy pontot ér.
* Random jelenik meg egyszerre egy eledel.
* Ellenőrizni kell, hogy ne a kígyó testére essen az eledel pozíciója.
* Ha a kígyó feje rálép az eledelre, akkor növeljük a pontokat és átállítjuk az osztályokat.
* Az eledel elfogyasztása után újat generálunk.
