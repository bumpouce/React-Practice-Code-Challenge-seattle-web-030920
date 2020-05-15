import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
            props.allSushi.map(currentSushi => {return <Sushi sushi={currentSushi} chooseSushi={props.onChooseSushi}/>
            })
        }
        <MoreButton handleDisplay={props.plateView}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer