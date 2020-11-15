function ajax(url, data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(data));
  xhr.onload = function () {
    if (this.status === 201) {
      console.log(this.response);
    }
  };
}