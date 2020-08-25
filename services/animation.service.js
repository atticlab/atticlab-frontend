import anime from 'animejs'

const translate = (element) => {
  anime({
    targets: element,
    easing: 'linear',
    loop: true,
    padding: '10px 52px',
    duration: 1000,
  })
}

export { translate }
