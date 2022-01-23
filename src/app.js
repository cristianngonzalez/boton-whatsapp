var app = new Vue({
    el: '#app',
    data: {
      message: 'Give me follow in instagram ;)',
      countries: allCountries,
      countrySelected: '+54',
      phoneNumber: '',
      color: '#00CC33',
    },
    methods:{
      /*To copy the code*/
      copyToClipBoard(event , id){
        //Restore all copy buttons
        let buttons = document.getElementsByClassName('copyButton')
        buttons[0].innerHTML = 'Copy';
        buttons[1].innerHTML = 'Copy';

        //Change text this copy button
        event.target.innerHTML = 'Copied!'

        //Copy to clipboard
        const str = document.getElementById(id);
        window.getSelection().selectAllChildren(str);
        document.execCommand("Copy")
      }
    }


})

