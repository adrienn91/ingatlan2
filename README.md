# Ingatlanhirdetéseket kezelő alkalmazás

Az ingatlanhirdetéseket kezelő alkalmazés célja, hogy könnyedén és gyorsan megtaláljuk a számunkra megfelelő ingatlant illetve, hogy saját tulajdonunkat reklámozni tudjuk.

## Funkcionális követelmények:
-	Vendégként szeretnék kiemelt ingatlan hirdetéseket látni a főoldalon
-	Vendégként szeretnék a hirdetések között szabadon böngészni
-	Vendégként szeretnék különböző paraméterek szerint ingatlanokra keresni 
-	Vendégként szeretném megtekinteni egy adott hirdetés leírását + fényképeit
-	Vendégként szeretnék regisztrálni az oldalra
-	Felhasználóként szeretnék tudni bejelentkezni az oldalra
-	Felhasználóként szeretném tudni szerkeszteni a profiladataimat
-	Felhasználóként szeretnék tudni feladni új hirdetést
-	Felhasználóként szeretném tudni a saját hirdetéseimet szerkeszteni, módosítani, törölni
-   Felhasználóként lehetőségem van a számomra szimpatikus hirdetéseket hozzáadni a "kedvenceimhez", hogy ne kelljen újra kikeresnem

## Nem funkcionális követelmények
-	Felhasználóbarát, ergonomikus elrendezés és kinézet
-	Gyors működés
-	Biztonságos működés: jelszavak tárolása, funkcióhoz való hozzáférés

## Szakterületi Fogalomjegyzék
-	Ingatlanhirdetés: Képes-szöveges felhívás egy eladó házról, lakásról vagy építési telekről, amely annak értékesítését segíti elő és alapvető adatokat közöl róla

## Szerepkörök
- Vendég: Ingatlanok keresésére, böngészésére és megtekintésére jogosult
-	Felszanáló: A vendég szerepkörön túl saját hirdetés feladására és hirdetésfigyelésre jogosult

## Használati eset diagram
![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/usecase.png)

## Folyamatok meghatározása

- Bejelentkezés:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/bejelentkezes.png)

- Új hirdetés feladása

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/uj_hirdetes.png)

## Oldaltérkép
### Publikus
- Főoldal
- Ingatlanok keresése, böngészése
    + Ingatlan megtekintése
- Regisztráció
- Belépés

### Felhasználó
- Kilépés
- Profiladatok
   + Profiladatok szerkesztése
- Új ingatlan felvétele
   + Paraméterek megadása
- Kedvenc ingatlanaim

## Végpontok
- GET /: főoldal
- GET /login: bejelentkezés
- POST /login: bejelentkezési adatok felküldése
- GET /register: regisztráció
- POST /register: regisztrációs adatok felküldése
- GET /advertisements: ingatlanhirdetések
- GET /advertisements/:id: ingatlanhirdetés megtekintése
- GET /advertisements/create: új ingatlanhirdetés űrlap
- POST /advertisements/create: új ingatlanhirdetés űrlap, adatok felküldése
- GET /advertisments/create/:id/upload: inaglanhoz tartozó képek
- PUT /advertisments/create/upload/file: képek feltöltése az ingatlanhoz, kép lementése
- DELETE /advertisments/create/upload/file/:id : feltöltött képek törlése
- GET /advertisments/:id/edit: ingatlanhirdetés szerkesztése
- POST /advertisments/:id/edit: ingatlanhirdetés szerkesztése adatok felküldése
- GET /advertisments/:id/delete: ingatlanhirdetés törlése
- DELETE /advertisments/:id/delete: adatok felkldése a törléshez
- GET /advertisments/:id/favorite: hozzáadás a kedvencekhez
- GET /myFavorites: kedvenc hirdetéseim megtekintése

## Oldalvázlatok:

- Főképernyő:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/fokép.png)

- Ingatlan megtekintése:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/reszletek.png)

- Új hirdetés feltöltése:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/uj.png)

- Regisztráció:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/reg.png)

- Belépés:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/belepes.png)

- Keresés:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/kereses.png)

- Szerkesztés

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/szerkesztes.png)

- Képek hozzáadása:

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/kep.png)

## Adatmodell

![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/database.png)

# Implementáció

Webes Ide: cloud9

 - Github account szükséges
 - Belépés után új workspace létrehozása (node.js)
 - Ezután elkezdhetjük a kód írását
 - git add paranccsal kiválaszthatunk egy fájlt verzionálásra, vagy git add . paranccsal az összes fájlt kiválaszthatjuk
 - git commit -m "commit" paranccsal feltehetjük a fájlokat a cloud9 helyi tárolójába. Az így megjelölt verziókhoz a       
 későbbiekben visszatérhetünk, különbségüket megtekinthetjük.
 - git push origin master paranccsal a lokális tárolóból feltölthetjük a tartalmat a Github-ra.
 - Végezetül a Github oldalán leellenőrizhetjük a munkánkat.

## Könyvtárstruktúra
- app
    + Http
        + Controllers
            + FileController.js
            + PropertyController.js
            + UserController.js
    + Model
        + AddType.js
        + Property.js
        + Favorite.js
        + Token.js
        + User.js
- resources
    + views
        + layout.njk
        + main.njk
        + register.njk
        + login.njk
        + showProperty.njk
        + createProperty.njk
        + editProperty.njk
        + propertySearch.njk
        + fileUpload.njk
        + editProperty.njk
        + showFavorite.njk

# Felhasználói dokumentáció

- Futtatáshoz szükséges operációs rendszer: Tetszőleges operációs rendszer

- A futtatáshoz szükséges hardver: Operációs rendszerek szerint megadva

- Egyéb követelmények: Internet böngésző telepítése, JavaScript ajánlott

## Program használata:

- Böngészőben nyissuk meg a főoldalt
- Jobb felső sarokban kattintsunk a Bejelentkezés feliratra
- Bejelentkezés/Regisztráció után a Lista oldalra jutunk
- A felső menüsávon az Új hirdetés felvitele gombra kattintva tudunk új hirdetéseket felvenni a listába
- Töltsük ki az űrlapot
- Hibás adatok esetén az űrlap jelezni fogja a hibát
- Mentés és tovább gombra kattintva elmentjük az adatokat és átnavigálunk a kép feltöltéséhez
- A kép feltöltő oldalon töltsünk fel egy tetszőleges képet
- Lista oldalon megnézhetünk egy hirdetés részletes leírását
- A részletes leírás felületen van lehetőségünk az adott hirdetést szerkeszteni és törölni

# A szerveroldali alkalmazás progresszív fejlesztése kliensoldali JavaScript segítségével

## Érintett fájlok

- app
    + Http
        + Controllers
            + FileController.js
            + PropertyController.js
            + UserController.js
        + routes.js
- public
    + scripts
        + ajaxFileUpload.js
        + delete.js
        + favoriteNumber.js
        + gallery.js
        + popup.js
    + fileupload.css
    + gallery.css
    + reset.css
- resources
    + views
        + fileUpload.njk
        + layout.njk
        + main.njk
        + showFavorite.njk
        + showProperty.njk
        
## Funkciók működése

### Kedvencnek jelölt ingatlanok darabszáma (favoriteNumber.js):

A showFavorite.njk oldalon lévő panel típusú elemeket számolja meg (és elmenti a db változóba), mely eredményét a h2 típusú bekezdés után jeleníti meg a következő formában: (${db} kedvenc)

### Törlés (delete.js) [AJAX]:
A showProperty.njk oldalon lévő Törlés gomb funkciójának felüldefiniálása. A felhasználó megerősítheti a törlés bizonyosságát egy modális segítségével.

### Popup login (popup_login.js) [AJAX]:
A layout.njk oldalon lévő Belépés gomb felüldefiniálása. A popup ablakban a login.njk formja jelenik meg.

### Képfeltöltés (ajaxFileUpload.js) [AJAX]:
A fileUpload.njk oldalon a képfeltöltés felüldefiniálása. A "kitallózott" kép automatikusan tárolásra kerül. Submit gomb elrejtése, ha elérhető a javaScript.

#### Képnézegető (gallery.js):
Az ingatlanok megtekintésénél a fényképre kattintás hatására megejelenik egy bezárható, lapozható képnézegető.

# Tesztelés
## Selenium IDE telepítése Firefox böngészőben:

- https://addons.mozilla.org/hu/firefox/addon/selenium-ide/ oldalon Plugin hozzáadása a Firefoxhoz
- Firefox újraindítása
- Selenium IDE megnyitása
- File/Open Test Suite - Tesztek megnyitása
- Play Entire Test Suite gomb segítségével tesztek futtatása

## Tesztesetek

### Regisztráció

- Regisztráció link megnyomása
- Név, email cím, jelszó és jelszó megerősítő mezők kitöltése
- Submit gomb

### Belépés

- belépés gomb megnyomása
- e-mail, jelszó kitöltése
- submit gomb
- ellenőrzés: Kilépés gomb megjelenése, Üdv, "név" szöveg

### Új hirdetés feladása

- Új hirdetés link megnyomása
- Ürlap kitöltése adatokkal
- Mentés és tovább gomb megnyomása
- Fájlfeltöltésre navigálás, ahol képfeltöltés nélkül Jóváhagyás gomb megnyomása
- Ellenőrzés: Cím mező szövege

### Kedvencek

- A létrehozott ingatlannál részletek gombra lépés
- Kedvencek gomb megnyomása
- Ell.: Kedvencek felületre navigálás és checkolás

### Szerkeszés

- A létrehozott ingatlannál részletek gombra lépés
- Szerkesztés gomb megnyomása
- Cím módosítása
- Ell.: Módosított cím megjelenik

### Törlés:

- A létrehozott ingatlan törlés
- Felugró ablak: megerősítés

### Kilépés

- Kilépés link megnyomása
- Ell.: Belépés link megjelenik
