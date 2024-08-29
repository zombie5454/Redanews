const setCookie = (cname, cvalue, exdays=-1) => {
  var d = new Date();
  let expires = "";
  if(exdays == -1){        // 當天結束
    let tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate()+1)
    expires = "expires=" + tomorrow.toGMTString();
  }
  else{
    d.setTime(d.getTime() + (exdays*60*1000));
    expires = "expires=" + d.toGMTString();
  }
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const deleteCookie = () => {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export { setCookie, deleteCookie, getCookie };
