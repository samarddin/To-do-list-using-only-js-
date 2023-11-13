let api = "http://localhost:3000/data";
let body = document.querySelector("body");
let box = document.querySelector(".box");
let neww = document.querySelector(".new");
let dialog1 = document.querySelector(".dialog1");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");
let inp5 = document.querySelector(".inp5");
let inp6 = document.querySelector(".inp6");
let delet = document.querySelector(".delet");
let clean = document.querySelector(".cenical");
let save = document.querySelector(".save");
let userlist = document.querySelector("userlist");
let dark = document.querySelector(".dark");
let table = document.querySelector(".table");
let light = document.querySelector(".light");
let userList = document.querySelector(".userList");
let lefth2 = document.querySelector(".lefth2");
let select1 = document.querySelector(".select1");
let select2 = document.querySelector(".select2");
let righth2 = document.querySelector(".righth2");

select1.onclick = async () => {
  try {
    if (select1.value != "all") {
      const response = await fetch(`${api}?status=${select1.value}`);
      const data = await response.json();
      getdata(data);
    } else {
        const response = await fetch(api);
        const data = await response.json();
        getdata(data);
   }
  } catch (error) {
    console.log(error);
  }
}

select2.onclick = async () => {
  try {
    if (select2.value != "all") {
      const response = await fetch(`${api}?city=${select2.value}`);
      const data = await response.json();
      getdata(data);
    } else {
      const response = await fetch(api);
      const data = await response.json();
      getdata(data);
    }
  } catch (error) {
    console.log(error);
  }
};


righth2.oninput = async() => {
  try {
    const response = await fetch(`${api}?q=${righth2.value}`)
    const data = await response.json()
    getdata(data)
  } catch (error) {
    console.error(error);
  }
}


async function get() {
  try {
    let fullfiled = await fetch(api);
    let data = await fullfiled.json();
    getdata(data);
  } catch (error) {
    console.error(error);
  }
}

neww.onclick = () => {
  dialog1.showModal();
  delet.onclick = () => {
    dialog1.close();
  };
  clean.onclick = () => {
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
    inp4.value = "";
    inp6.value = "";
    inp7.value = "";
  };
};

save.onclick = () => {
  if (inp1.value.length == 0) {
    return alert("pur kuned inp 1");
  }
  let newuser = {
    img: inp1.value,
    fullname: inp2.value,
    email: inp3.value,
    city: inp4.value,
    status: inp5.value,
    phone: inp6.value,
  };
  adduser(newuser);
};
async function adduser(newuser) {
  try {
    let fullfiled = await fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    });
    get();
  } catch (error) {
    console.error(error);
  }
  dialog1.close();
}
async function deleting(id) {
  try {
    let fullfiled = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    get();
  } catch (error) {
    console.error(error);
  }

}
function getdata(data) {
  box.innerHTML = "";
  data.forEach((element) => {
    let card = document.createElement("tr");
    let img2 = document.createElement("img");
    let fullname = document.createElement("h3");
    let email = document.createElement("p");
    let divnames = document.createElement("div");
    let tduser = document.createElement("td");
    let tdcity = document.createElement("td");
    let divstatus = document.createElement("div");
    let tdstatus = document.createElement("td");
    let tdphone = document.createElement("td");
    let elip = document.createElement("td");

    img2.src = element.img;
    fullname.innerHTML = element.fullname;
    email.innerHTML = element.email;
    tdcity.innerHTML = element.city;
    divstatus.innerHTML = element.status;
    tdphone.innerHTML = element.phone;
    elip.innerHTML = '<i class="fa-solid fa-ellipsis"></i>';

    if (element.status == "active") {
      divstatus.classList.add("active");
    }
    if (element.status == "inactive") {
      divstatus.classList.add("inactive");
    }

    img2.classList.add("img2");
    tduser.classList.add("divuser");
    divnames.classList.add("divnames");
    elip.classList.add("elip");

    let dialog2 = document.createElement("dialog");
    let dialog3 = document.createElement("dialog");
    let divdialog3 = document.createElement("div");
    let inp11 = document.createElement("input");
    let inp22 = document.createElement("input");
    let inp33 = document.createElement("input");
    let inp44 = document.createElement("input");
    let inp55 = document.createElement("input");
    let inp66 = document.createElement("input");
    let toadit = document.createElement("button");
    let info = document.createElement("button");
    let iinfo = document.createElement("i");
    let txtinfo = document.createElement("h3");
    let edit = document.createElement("button");
    let iedit = document.createElement("i");
    let txtedit = document.createElement("h3");
    let delet = document.createElement("button");
    let idelet = document.createElement("i");
    let txtdelet = document.createElement("h3");
    let div3 = document.createElement("div");
    let adituser = document.createElement("h1");
    let delicon = document.createElement("i");
    let x = document.createElement("i");
    let dialog4 = document.createElement("dialog");
    let imgdialog4 = document.createElement("img");
    let nameuser = document.createElement("h1");
    let emailuser = document.createElement("h3");
    let divtdial4 = document.createElement("div");
    let h1dvd4 = document.createElement("h1");
    let iidelet = document.createElement("i");
    let hr1 = document.createElement("hr");
    let phoneuser = document.createElement("p");
    let cityuser = document.createElement("p");
    let divabout = document.createElement("div");
    let hr2 = document.createElement("hr");
    let divd4 = document.createElement("div");
    let edit2 = document.createElement("button");
    let delet2 = document.createElement("button");
    let divfor = document.createElement("div");

    iinfo.innerHTML = '<i class="fa-solid fa-user"></i>  ';
    cityuser.innerHTML = element.city;
    txtinfo.innerHTML = "View profile";
    iedit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    txtedit.innerHTML = "Edit";
    idelet.innerHTML = '<i class="fa-solid fa-trash"></i>';
    txtdelet.innerHTML = "Delete";
    x.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    toadit.innerHTML = "ADIT";
    adituser.innerHTML = "ADIT USER";
    delicon.innerHTML = ' <i class="fa-solid fa-delete-left delet"></i>';
    imgdialog4.src = element.img;
    nameuser.innerHTML = element.fullname;
    phoneuser.innerHTML = element.phone;
    emailuser.innerHTML = element.email;
    h1dvd4.innerHTML = "About user";
    iidelet.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    divd4.innerHTML = element.status;
    edit2.innerHTML = "Edit";
    delet2.innerHTML = "Delete";

    dialog2.classList.add("dialog2");
    info.classList.add("info");
    edit.classList.add("edit");
    delet.classList.add("delett");
    x.classList.add("x");
    dialog3.classList.add("dialog3");
    divdialog3.classList.add("divdialog3");
    divfor.classList.add("divfor");
    div3.classList.add("div3");
    dialog4.classList.add("dialog4");
    imgdialog4.classList.add("imgdialog4");
    divtdial4.classList.add("divdialog4");
    divabout.classList.add("divabout");
    if (divd4.innerHTML == "active") {
      divd4.classList.add("divd4");
    }
    if (divd4.innerHTML == "inactive") {
      divd4.classList.add("divd44");
    }
    hr1.classList.add("hr1");
    iidelet.onclick = () => {
      dialog4.close();
    };
    delet2.onclick = () => {
      deleting(element.id);
    };
    edit2.onclick = () => {
      dialog3.showModal();
      inp11.value = element.img;
      inp22.value = element.fullname;
      inp33.value = element.email;
      inp44.value = element.city;
      inp55.value = element.status;
      inp66.value = element.phone;
      toadit.onclick = () => {
        let edituser = {
          img: inp11.value,
          fullname: inp22.value,
          email: inp33.value,
          city: inp44.value,
          status: inp55.value,
          phone: inp66.value,
        };
        addit(element.id, edituser);
      };
    };
    x.onclick = () => {
      dialog2.close();
    };
    delicon.onclick = () => {
      dialog3.close();
    };
    edit.onclick = () => {
      dialog3.showModal();
      inp11.value = element.img;
      inp22.value = element.fullname;
      inp33.value = element.email;
      inp44.value = element.city;
      inp55.value = element.status;
      inp66.value = element.phone;
      toadit.onclick = () => {
        let edituser = {
          img: inp11.value,
          fullname: inp22.value,
          email: inp33.value,
          city: inp44.value,
          status: inp55.value,
          phone: inp66.value,
        };
        addit(element.id, edituser);
      };
    };

    delet.onclick = () => {
      deleting(element.id);
    };

    info.onclick = () => {
      dialog4.showModal();
      dialog2.close();
    };

    dark.onclick = () => {
      body.classList.toggle("boddy");
      light.classList.toggle("lightt");
      dark.classList.toggle("darkk");
      neww.classList.toggle("new2");
      table.classList.toggle("tablee");
      select1.classList.toggle("select1d");
      select2.classList.toggle("select1d");
      righth2.classList.toggle("select1d");
      dialog1.classList.toggle("ddialog1");
      userList.classList.toggle("userl2");
    };
    light.onclick = () => {
      body.classList.toggle("boddy");
      light.classList.toggle("lightt");
      dark.classList.toggle("darkk");
      neww.classList.toggle("new2");
      table.classList.toggle("tablee");
      select1.classList.toggle("select1d");
      select2.classList.toggle("select1d");
      righth2.classList.toggle("select1d");
      dialog1.classList.toggle("ddialog1");
      userList.classList.toggle("userl2");
    };
    divfor.append(edit2, delet2);
    divabout.append(phoneuser, cityuser, divd4);
    dialog4.append(
      divtdial4,
      imgdialog4,
      nameuser,
      emailuser,
      hr1,
      divabout,
      hr2,
      divfor
    );
    div3.append(adituser, delicon);
    edit.append(iedit, txtedit);
    info.append(iinfo, txtinfo);
    delet.append(idelet, txtdelet);
    dialog2.append(x, info, edit, delet);
    divdialog3.append(div3, inp11, inp22, inp33, inp44, inp55, inp66, toadit);
    dialog3.append(divdialog3);
    divtdial4.append(h1dvd4, iidelet);
    elip.onclick = () => {
      dialog2.showModal();
    };

    divnames.append(fullname, email);
    tduser.append(img2, divnames);
    tdstatus.append(divstatus);
    card.append(
      tduser,
      tdcity,
      tdstatus,
      tdphone,
      elip,
      dialog2,
      dialog3,
      dialog4
    );
    box.append(card);
  });
}
get();


async function addit(id, edituser) {
  try {
    let fullfiled = await fetch(`${api}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edituser),
    });
    get();
  } catch (error) {
    console.error(error);
  }
}
