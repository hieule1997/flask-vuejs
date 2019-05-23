<template>
  <div id="hello" class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="text" class="form-control" placeholder="Enter usename" v-model = "usename">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" class="form-control" placeholder="email" v-model = "email">
        </div>
        <button type="button" class="btn btn-primary" v-on:click = "manadata">Gui</button>
      </div>
      <div class="col-sm-6">
        <div v-for="user in list_user">
            <div class="row">
              <label class="col-md-4">
                user_name : {{user.username }}
              </label>
              <label class="col-md-4">
                email : {{user.email }}
              </label>
              <div class="col-md-4">
                <button class="btn btn-info" v-on:click = "edit_item(user)">edit</button>
                <button class="btn btn-danger" v-on:click = "del_item(user)">delete</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import Vue from "vue"

const Name = "/user"
export default {
  name: 'HelloWorld',
  data () {
    return {
      usename: '',
      email : '',
      list_user : [],
      
    }
  },
  created(){
    this.manada1();
  },
  watch:{
    // 'list_user' : function () {  
    // }
  },
  methods: {
    manada1: function() {
      axios
        .get(Name)
        .then(response => {
          this.list_user = response.data;
        })
    },
     manadata: function() {
      let data_a = JSON.stringify({
        "username": this.usename,
        "email": this.email
      });
      console.log(data_a)
      axios
        .post(Name,data_a,{
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          let data_use = {
            "username": this.usename,
            "email": this.email
          };
          this.list_user.push(data_use)
          this.usename = ''
          this.email = ''
          Vue.notify({
            type: "success",
            title: "Thành công"
          });
        })
    },
    del_item: function(item) {
      axios
        .delete(Name + "/" + item.username)
        .then(response => {
          Vue.notify({
            type: "success",
            title: "Thành công"
          });
          this.manada1()          
        }).then(
        )
    },
    edit_item: function(item) {
      let data_a = JSON.stringify({
        "usename": item.usename,
        "email": this.email
      });
      console.log(data_a)
      axios
        .put(Name + "/" + item.usename,data_a)
        .then(response => {
          this.list_user = response.data;
          Vue.notify({
            type: "success",
            title: "Thành công"
          });
        })
    }
    
  },
  computed:{
    // manada: function() {
    //   axios
    //     .get(Name)
    //     .then(response => {
    //       this.list_user = response.data;
    //     })
    // }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
