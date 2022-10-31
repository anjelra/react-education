import React from 'react'
import PropTypes from 'prop-types'

function A01FuncProps(props) {
  const {name, age, arr, user, onAdd, isChecked, num, obj, children} = props;

  return (
    <div>
      <h3>A01 Function Props</h3>

      <div>
        Name: {name}<br />
        Age: {age + 100}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}<br />
        isChecked: {isChecked ? 'T' : 'F'}<br />
        <br />
        Num: {num}<br />
        Object: {obj.name}<br />
        <br />

        {children}
      </div>
    </div>
  )
}

A01FuncProps.defaultProps = {
  num: 0,
  obj: {name: 'unknown'}
}

A01FuncProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  arr: PropTypes.array,
  user: PropTypes.object,
  onAdd: PropTypes.func,
  num: PropTypes.number,
  obj: PropTypes.object,
}

export default A01FuncProps