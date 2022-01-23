var app = new Vue({
    el: '#app',
    data: {
      message: 'Give me follow in instagram ;)',
      messageConverted: '',
      countries: allCountries,
      countrySelected: '+54',
      phoneNumber: '',
      color: '#00CC33',
      position: 'left'
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
      },

      /*Change message*/
      changeMessage(event){

        this.messageConverted = this.message.replace(/ /g , '%20');

        console.log(this.messageConverted)

      },

      setPosition(event , position){
        //Toggle class pushed button
        let buttons = document.getElementsByClassName('buttonPosition')
        buttons[0].classList.remove('buttonPositionPushed');
        buttons[1].classList.remove('buttonPositionPushed');

        event.target.classList.add('buttonPositionPushed');

        console.log(position);  

        this.position = position;
      }
    }


})

