import anime from 'animejs'

const animation = ({ targets, ...rest }) => {
  return anime({
    targets,
    ...rest,
  })
}

export { animation }
