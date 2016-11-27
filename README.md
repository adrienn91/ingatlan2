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
![alt tag](https://github.com/adrienn91/ingatlan2/blob/master/images/Use_Case.png)

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
