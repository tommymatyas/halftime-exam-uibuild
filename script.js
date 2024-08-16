document.getElementById("root").innerHTML = `
    <div id="form">
        <h1>Visszajelzés</h1>
        <input type="text" placeholder="Tárgy">
        <textarea placeholder="Megjegyzés"></textarea>
    </div>

    <div class="checkbox">
        <label><input type="checkbox"> Elolvastam és elfogadom az <a href="#">Adatkezelési Tájékoztatót</a></label>
    </div>

    <div class="checkbox">
        <label><input type="checkbox"> Szeretnék hírlevelet kapni</label>
    </div>

    <button>MENTÉS</button>
`;
