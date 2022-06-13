Vue.createApp({
    data() {
      return {
        stores: [
            {
                name : "ldlc",
                source : "ldlc.png"
            }, 
            {
                name : "fnac",
                source : "fnac.png"
            }, 
            {
                name : "darty",
                source : "darty.png"
            }, 
            {
                name : "cdiscount",
                source : "cdiscount.png"
            }
        ]
      };
    },
  }).mount("#examples");
// Vue.createApp({
//     data() {
//       return {
//         stores: ["ldlc","fnac","darty","cdiscount"]
//       };
//     },
//   }).mount("#examples");