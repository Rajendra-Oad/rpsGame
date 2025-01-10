  
  let score = 0;

  function playGame(playerMove) {
      const randomNum = Math.random();
      let computerMove = '';

      // console.log(randomNum);


      if (randomNum >= 0 && randomNum < 1 / 3) {
          // console.log('Rock');
          computerMove = 'Rock';
      } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
          // console.log('Paper');
          computerMove = 'Paper';
      } else if (randomNum >= 2 / 3 && randomNum <= 1) {
          // console.log('Scissors');
          computerMove = 'Scissors';
      }

      let result = '';
      if (playerMove === computerMove) {
          result = 'You tie!';
      } else if (playerMove === 'Rock' && computerMove === 'Scissors' || playerMove === 'Paper' && computerMove === 'Rock' || playerMove === 'Scissors' && computerMove === 'Paper') {
          result = 'You won!';
          score++;
          setBackground('win');
          // localStorage.setItem('Score', score);

      } else {
          result = 'You lose!'
          score = 0;
          setBackground('lose');
          // localStorage.setItem('Score', score);

      }

      let store = localStorage.getItem('score')
      if(store == null){
        console.log('not saved in local');
      }else {
        console.log('saved in local')
      }

      // document.getElementById('result').innerText = `You picked ${playerMove}, Computer picked ${computerMove}.${result}`
      document.getElementById('score').innerText = `Score : ${score}`
  }

  function setBackground(resultType) {
    const body = document.body;

    // Add the corresponding class
    if (resultType === 'win') {
        body.classList.add('win');
    } else if (resultType === 'lose') {
        body.classList.add('lose');
    }

    // Remove the class after 2 seconds
    setTimeout(() => {
        body.classList.remove('win');
        body.classList.remove('lose');
    }, 1500);
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let name = 'Oad';
  // console.log(`My name is ${name}`);
  // document.getElementById('p').innerText = `My name is ${name}`;

  // let cost = (5 * 1) + (2 * 3) + (1 * 9);
  // console.log(`Cost of food : $${cost}`);
  // let tax = cost * 0.1; //10% tax
  // console.log(`Tax(10%) : $${tax}`)
  // cost += tax;
  // console.log(`Total Cost : $${cost}`);
  //   let cartQuantity = 0;

  //   function AddUpdateCart(amount) {
  //       cartQuantity += amount
  //       document.getElementById('result').innerText = `Cart Quantity : ${cartQuantity}`;
  //   }


  //   function SubUpdateCart(amount) {
  //       cartQuantity -= amount;
  //       document.getElementById('result').innerText = `Cart Quantity : ${cartQuantity}`;

  //   }



  //   function reset() {
  //       cartQuantity = 0;
  //       document.getElementById('result').innerText = `Cart Quantity : ${cartQuantity}`;

  //   }

