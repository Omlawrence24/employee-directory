
import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY);
  }
};



// function emplo

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
      

//   export: 


