import * as React from 'react'
import { connect } from 'react-redux'
import { User, change_name, change_gender } from '../../store/reducers/user'

import './index.scss'
import { StoreState } from '../../store'

// alias `type` cant pass eslint
interface Props {
  user: User;
  change_name(value: string): void;
  change_gender(value: string): void;
}
const chooseBoyOrGirl = (gender: '男' | '女'): string =>
  (gender === '男' ? '女' : '男')
export const Hello: React.StatelessComponent<Props> = props => (
  <div>
    <div>
      <button
        className="test"
        onClick={() => props.change_gender(chooseBoyOrGirl(props.user.get('gender')))}
      >
        更改
      </button>
      <input
        onChange={e => props.change_name(e.target.value)}
        type="text"
        value={props.user.get('name')}
      />
    </div>
    <div>
      Hello, {props.user.get('name')} - {props.user.get('gender')}
    </div>
  </div>
)

const mapStateToProps = (state: StoreState) => ({
  user: state.get('user')
})
const mapDispatchToProps = {
  change_name,
  change_gender
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)
