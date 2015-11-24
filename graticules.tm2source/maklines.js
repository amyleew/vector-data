var lons = [], lats = [];
var insert = "INSERT INTO grats (degrees,direction,display,geom) VALUES ("
var h = 1000; //how many lines do you want


function pop(a, r) {
    for (var i=-(r*h); i<=(r*h); i++) {
        a.push(i/h);
    }
}

console.log("create table grats (degrees numeric,direction text,display text,geom geometry);");

// horizontal lines
pop(lons, 180);
for (l in lons) {
    var x = lons[l];
    var dir = x == 0 ? '' : ((x>0) ? 'E' : 'W');
    geom = "ST_GeomFromText('LINESTRING(" +x+ " -90," +x+ " 90)', 4326)"
    values = x+ ",'" +dir+ "','" + x+ " " +dir+ "'," +geom+ ");"
    console.log(insert + values);
}

//vertical lines
pop(lats, 90)
for (l in lats) {
    var y = lats[l];
    var dir = y == 0 ? '' : ((y>0) ? 'N' : 'S');
    geom = "ST_GeomFromText('LINESTRING(-180 " +y+ ",180 " +y+ ")', 4326)"
    values = y+ ",'" +dir+ "','" + y+ " " +dir+ "'," +geom+ ");"
    console.log(insert + values);
}
