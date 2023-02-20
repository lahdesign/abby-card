const addHandlers = () => {
    $('#button').on('click', onButtonClick)
  }

const onButtonClick = function () {
   console.log('got into function')
    // $('#message').text('Welcome to the moon.')
    // $('#message').css('background-Color', 'blue')
    // setTimeout(() => $('#message').text(''), 3000)
    $('.front-card').addClass('animate__animated animate__hinge');
    // $('#welcomePage').addClass('animated rollIn')
  }
  $(() => {
    addHandlers()
  })