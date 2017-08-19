/* Copyright 2017 @hacktiv8-Redha Putra */

//Variabel - variabel
var luciferHp = 20000;
var luciferDef = 50;
var luciferAtk = 145;
var luciferInt = 145;
var luciferAgi = 50;
var luciferStatusEffect = "";
var luciferSkills = ["Demon Slash!","Banishing Light","Absorb","Dark Hole"];
var playerHp = 0;
var playerDef = 0;
var playerAtk = 0;
var playerInt = 0;
var playerAgi = 0;
var skills;
var setSkills;
var skillsUsed;
var damage;
var heals = 0;
var chance;
var turn;
var inEffect = 0;
var tambah = Math.floor(Math.random()*20);

alert("Selamat datang player di game 25 Turn Alert Battle Heroes\nSebelum memulai silahkan buat character terlebih dahulu");

var ign = prompt("Masukan In Game Nick(IGN) anda : ");
if(ign === ""){
  ign = "SI Tanpa Nama";
}
  
var x = prompt("Pilih Job yang anda inginkan (masukan hanya angkanya saja) : \n1. Knight (High Defense)\n2. Warrior (High Offense)\n3. Assasin (High Speed)\n4. Wizard (High Intellegent)\n5. Priest (High Health Point)");

switch(x){
  case "1":
  case "1.":
    var job = "Knight";break;
  case "2":
  case "2.":
    var job = "Warrior";break;
  case "3":
  case "3.":
    var job = "Assasin";break;
  case "4":
  case "4.":
    var job = "Wizard";break;
  case "5":
  case "5.":
    var job = "Priest";break;
  default:
    alert("Maaf Hanya angka yang terdaftar saja yang sistem terima");break;
}

if(job != null){
  alert("~=*Selamat Datang "+job+" "+ign+"*=~\n''~--=.di Flash World.=--~''\n\n");
  alert("Char name : "+ign+"\njob : "+job);
  playerStatus(0);
  playerSkills();
  alert("Skills : \n*"+skills[0][0]+"  --- "+skills[0][1]+"\n*"+skills[1][0]+" --- "+skills[1][1]+"\n*"+skills[2][0]+" --- "+skills[2][1]+"\n*"+skills[3][0]+" --- "+skills[3][1]);
  alert("Misi : Mengalahkan Lucifer(the Fallen Angel)\n\n");
  alert("~-=Penjelasan Singkat=-~\n*Anda akan diminta untuk mengalahkan Lucifer(The Fallen Angel).\n*Pertarungan di lakukan secara otomatis.\n*Setiap job yang ada memiliki skill dengan damage dan effect yang berbeda.\n*Sebelum bertarung anda dapat melakukan power up dengan menjawab 1 pertanyaan dengan benar.");
  alert("Selamat mencoba!\n\nTekan OK untuk memulai");
  battle();
}

//---------------Fungsi - fungsi-------------------------------
function playerSkills(){
  if(job === "Knight"){
    skills = [
      ["Charge!",""],
      ["Bash","Effect : Stun ~ Membuat lawan tidak mendapatkan giliran selama 1 turn -- 30% chance"],
      ["Defense UP!","Effect : Defense +10 ~ Menambah defense pemain secara permanen"],
      ["Defense Bom",""]
    ];
  }else if(job === "Warrior"){
    skills = [
      ["V-Slash",""],
      ["Z-Slash",""],
      ["Attack Up!","Effect : Attack +10 ~ Menambah attack pemain secara permanen"],
      ["The Great Warrior","Effect : Status +10 ~ Menambahkan status pemain secara permanen"]
    ];
  }else if(job === "Assasin"){
    skills = [
      ["Backstab!","Effect : Critical ~ Menambah damage yang di keluarkan"],
      ["Poison Bom","Effect : Poison ~ Mengurangi darah lawan 5% perturn -- 30% chance"],
      ["Slash",""],
      ["Double Slash",""]
    ];
  }else if(job === "Wizard"){
    skills = [
      ["Lightning!","Effect : Paralyze ~ Membuat musuh tidak dapat menyerang berdasarkan peluang, 30% chance"],
      ["Inferno!",""],
      ["Blizzard!","Effect : Frozen ~ Membekukan lawan, sehingga lawan tidak mendapat giliran selama 1 turn, 30% chance"],
      ["Rain of Meteor",""]
    ];
  }else{
    skills = [
      ["Purification",""],
      ["Light Beam",""],
      ["Heals","Effect : Heal ~ Menambah 5% darah pemain"],
      ["Greater Heals","Effect : Heal ~ Menambah 10% darah pemain"]
    ];
  }
  
  return skills;
}

function playerStatus(powerup){
  if(job === "Knight"){
    playerHp = 13000+(powerup*100);
    playerDef = 100+powerup;
    playerAtk = 80+powerup;
    playerInt = 0;
    playerAgi = 55+powerup;
    alert("Character Status : \n~~Hp : "+playerHp+"\n~~Def : "+playerDef+"\n~~Atk : "+playerAtk+"\n~~Int : "+playerInt+"\n~~Agi : "+playerAgi);
  }else if(job === "Warrior"){
    playerHp = 12000+(powerup*100);
    playerDef = 85+powerup;
    playerAtk = 100+powerup;
    playerInt = 0;
    playerAgi = 55+powerup;
    alert("Character Status : \n~~Hp : "+playerHp+"\n~~Def : "+playerDef+"\n~~Atk : "+playerAtk+"\n~~Int : "+playerInt+"\n~~Agi : "+playerAgi);
  }else if(job === "Assasin"){
    playerHp = 10500+(powerup*100);
    playerDef = 80+powerup;
    playerAtk = 80+powerup;
    playerInt = 0;
    playerAgi = 100+powerup;
    alert("Character Status : \n~~Hp : "+playerHp+"\n~~Def : "+playerDef+"\n~~Atk : "+playerAtk+"\n~~Int : "+playerInt+"\n~~Agi : "+playerAgi);
  }else if(job === "Wizard"){
    playerHp = 10500+(powerup*100);
    playerDef = 75+powerup;
    playerAtk = 0;
    playerInt = 130+powerup;
    playerAgi = 50+powerup;
    alert("Character Status : \n~~Hp : "+playerHp+"\n~~Def : "+playerDef+"\n~~Atk : "+playerAtk+"\n~~Int : "+playerInt+"\n~~Agi : "+playerAgi);
  }else{
    playerHp = 17000+(powerup*100);
    playerDef = 75+powerup;
    playerAtk = 0;
    playerInt = 65+powerup;
    playerAgi = 50+powerup;
    alert("Character Status : \n~~Hp : "+playerHp+"\n~~Def : "+playerDef+"\n~~Atk : "+playerAtk+"\n~~Int : "+playerInt+"\n~~Agi : "+playerAgi);
  }
}

function powerUp(){
  alert("Jawab Pertanyaan ini hanya dengan pilihan gandanya saja!!");
  var question = [
    ["Siapakah Presiden Indonesia Periode 2014-2019?\na. Jusuf Kalla\nb. Jokowi\nc. Habibi","b"],
    ["Apa nama gedung tempat Hacktiv8 berada?\na. Aquarius\nb. TBS Tower\nc. RDT","a"],
    ["Siapa nama ke 2 instruktur phase 0 full stack developer?\na. Fadil Wiranata dan Adhy Hakim\nb. Adhy Hakim dan Fadil Wiranata\nc. Fadil Hakim dan Adhy Wiranata","c"],
    ["Apa nama batch untuk batch ke-12?\na. Livelyfox\nb. Kitfox\nc. Jackfox","a"],
    ["Siapakah Wakil Presiden Indonesia Periode 2014-2019?\na. Jusuf Kalla\nb. Jokowi\nc. Habibi","a"],
    ["Apa kepanjangan dari HTML?\na. Hypertext Main Language\nb. Hypertext Markdown Language\nc. Hypertext Markup Language","c"],
    ["Apa fungsi dari tag <table></table> pada HTML?\na. Menghapus Tabel\nb. Membuat Tabel\nc. Mengatur Tabel","b"],
    ["Apa kepanjangan dari CSS?\na. Cascading Style\nb. Cascade Styling\nc. Cascading Stylesheet","c"],
    ["Apa fungsi dari Math.floor()?\na. Membulatkan Kebawah\nb. Membulatkan Keatas\nc. Menghilangkan angka dibelakang koma","a"],
    ["Apa fungsi dari Math.trunc()?\na. Membulatkan Kebawah\nb. Membulatkan Keatas\nc. Menghilangkan angka dibelakang koma","c"]
               ];
  var question2 = Math.floor(Math.random()*question.length);
  var jawab = prompt(question[question2][0]);
  jawab = jawab.toLowerCase();
  
  if(jawab == question[question2][1]){
    
    if(tambah === 0){
      tambah = 1;
    }
    
    alert("Benar!\n\nMasing-masing status ditambah "+tambah);
    return playerStatus(tambah);
  }else{
    alert("Maaf Jawaban anda salah!\n\nTidak dapat bonus status");
    return playerStatus(0);
  }
}

function battle(){
  powerUp();
  playerSkills();
  
  var tempAgiPlayer = playerAgi;
  var tempAgiLucifer = luciferAgi;
  
  
  console.log("~--==BATTLE LOG==--~");
  for(var i=0;i<25;i++){
    
    if(luciferStatusEffect === "Stun" && inEffect > 0){
      turn = "player";
      inEffect = inEffect - 1;
    }else if(luciferStatusEffect === "Poison" && inEffect > 0){
      if(tempAgiPlayer >= tempAgiLucifer){
        turn = "player";
        tempAgiPlayer = tempAgiPlayer - luciferAgi;
      }else{
        turn = "lucifer";
        tempAgiLucifer = tempAgiLucifer - playerAgi;
      //Poison damage
        damage = Math.round(luciferHp*0.05);
        luciferHp = luciferHp - damage;
        inEffect = inEffect - 1;
        console.log("\n~~~Lucifer took "+damage+" from poison");
      }
    }else if(luciferStatusEffect === "Paralyze" && inEffect > 0){
      var getTurn = Math.floor(Math.random()*2);
      if(getTurn === 0){
        turn = "player";
        inEffect = inEffect - 1;
        console.log("\n~~~Lucifer cannot move");
      }else{
        turn = "lucifer";
        inEffect = inEffect - 1;
        tempAgiLucifer = tempAgiLucifer - playerAgi;
      }
    }else if (luciferStatusEffect === "Freeze" && inEffect > 0){
      turn = "player";
      inEffect = inEffect - 1;
    }else{
      luciferStatusEffect = "";
      if(tempAgiPlayer >= tempAgiLucifer){
        turn = "player";
        tempAgiPlayer = tempAgiPlayer - luciferAgi;
      }else{
        turn = "lucifer";
        tempAgiLucifer = tempAgiLucifer - playerAgi;
      }
    }

    if(turn === "player"){
      setSkills = Math.floor(Math.random()*skills.length);
      skillsUsed = skills[setSkills][0];
      
      if(job == "Knight"){
        if(skillsUsed === skills[0][0]){
          damage = (playerAtk-luciferDef)*10;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else if(skillsUsed === skills[1][0]){
          damage = (playerAtk-luciferDef)*8;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
          chance = Math.floor(Math.random()*100); 
          if(chance % 3 === 0){
            luciferStatusEffect = "Stun";
            inEffect = 1;
            console.log("~~Lucifer is Stunned");
          }
        }else if(skillsUsed === skills[2][0]){
          playerDef = playerDef+10;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Def player up to "+playerDef);
        }else{
          damage = (playerDef-luciferDef)*10;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }
      }else if(job == "Warrior"){
        if(skillsUsed === skills[0][0]){
          damage = (playerAtk-luciferDef)*10;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else if(skillsUsed === skills[1][0]){
          damage = (playerAtk-luciferDef)*10;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else if(skillsUsed === skills[2][0]){
          playerAtk = playerAtk+10;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Player Atk up to "+playerAtk);
        }else{
          playerHp = playerHp + 1000;
          playerDef = playerDef + 10;
          playerAtk = playerAtk + 10;
          playerAgi = playerAgi + 10;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Player Status up");
        }
      }else if(job == "Assasin"){
        if(skillsUsed === skills[0][0]){
          damage = (playerAtk-luciferDef)*10;
          damage = damage + 200;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else if(skillsUsed === skills[1][0]){
          damage = (playerAtk-luciferDef)*8;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
          chance = Math.floor(Math.random()*100); 
          if(chance % 3 === 0){
            luciferStatusEffect = "Poison";
            inEffect = 3;
            console.log("~~Lucifer is Poisoned");
          }
        }else if(skillsUsed === skills[2][0]){
          damage = (playerAtk-luciferDef)*10;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else{
          damage = (playerAtk-luciferDef)*10;
          damage = damage * 2;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }
      }else if(job == "Wizard"){
        if(skillsUsed === skills[0][0]){
          damage = (playerInt-luciferDef)*8;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
          chance = Math.floor(Math.random()*100); 
          if(chance % 3 === 0){
            luciferStatusEffect = "Paralyze";
            inEffect = 3;
            console.log("~~Lucifer is Paralyzed");
          }
        }else if(skillsUsed === skills[1][0]){
          damage = (playerInt-luciferDef)*10;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else if(skillsUsed === skills[2][0]){
          damage = (playerInt-luciferDef)*8;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
          chance = Math.floor(Math.random()*100); 
          if(chance % 3 === 0){
            luciferStatusEffect = "Freeze";
            inEffect = 1;
            console.log("~~Lucifer is Frozen");
          }
        }else{
          damage = (playerInt-luciferDef)*7;
          damage = damage * 3;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage from 3 Meteor");
        }
      }else{
        if(skillsUsed === skills[0][0]){
          damage = (playerInt-luciferDef)*9;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else if(skillsUsed === skills[1][0]){
          damage = (playerInt-luciferDef)*10;
          
          if(damage <= 0){
            damage = 0;
          }
          
          luciferHp = luciferHp - damage;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~Lucifer took "+damage+" damage");
        }else if(skillsUsed === skills[2][0]){
          heals = Math.round(playerHp*0.05);
          playerHp = playerHp + heals;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~"+ign+" heals "+heals+" HP");
        }else{
          heals = Math.round(playerHp*0.1);
          playerHp = playerHp + heals;
          console.log("\n"+ign+" Keluarkan Skill "+skillsUsed);
          console.log("~~"+ign+" heals "+heals+" HP");
        }
      }
    }else{
      setSkills = Math.floor(Math.random()*luciferSkills.length);
      skillsUsed = luciferSkills[setSkills];
      
      if(skillsUsed === luciferSkills[0]){
        damage = (luciferAtk-playerDef)*10;
        
        if(damage <= 0){
            damage = 0;
        }
        
        playerHp = playerHp - damage;
        console.log("\nLucifer Keluarkan Skill "+skillsUsed);
        console.log("~~"+ign+" took "+damage+" damage");
      }else if(skillsUsed === luciferSkills[1]){
        damage = (luciferInt-playerDef)*10;
        
        if(damage <= 0){
            damage = 0;
        }
        
        playerHp = playerHp - damage;
        console.log("\nLucifer Keluarkan Skill "+skillsUsed);
        console.log("~~"+ign+" took "+damage+" damage");
      }else if(skillsUsed === luciferSkills[2]){
        damage = (luciferInt-playerDef)*10;
        
        if(damage <= 0){
            damage = 0;
        }
        
        playerHp = playerHp - damage;
        heals = Math.round(damage*0.7);
        luciferHp = luciferHp + heals;
        console.log("\nLucifer Keluarkan Skill "+skillsUsed);
        console.log("~~"+ign+" took "+damage+" damage");
        console.log("~~Lucifer Heals "+heals+" Hp");
      }else{
        damage = (luciferInt-playerDef)*10;
        
        if(damage <= 0){
            damage = 0;
        }
        
        playerHp = playerHp - damage;
        console.log("\nLucifer Keluarkan Skill "+skillsUsed);
        console.log("~~"+ign+" took "+damage+" damage");
      }
    }
  }
  if(playerHp>luciferHp){
    console.log("\nSelamat "+ign+" Berhasil Mengalahkan Lucifer!!");
  }else if(luciferHp>playerHp){
    console.log("\nGame Over.....\n"+job+" "+ign+" Telah dikalahkan Lucifer!!");
  }else{
    console.log("\nPertarungan Berakhir Seimbang");
  }
  
}
