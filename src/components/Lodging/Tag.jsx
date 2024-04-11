import PropTypes from 'prop-types'

export default function Tag({content}) {

  return <>
    <span>{content}</span>
  </>
}

Tag.propTypes = {
  content: PropTypes.string
}