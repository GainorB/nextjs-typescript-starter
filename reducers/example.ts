import {EXAMPLE_ACTION} from '../constants/actions';
import {ActionReturnProps} from '../interfaces';

interface StateProps {
  text: string;
}

const initialState = {
  text: 'I am initial example text',
};

export default (state: StateProps = initialState, action: ActionReturnProps): StateProps => {
  const {type, payload} = action;

  switch (type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        ...payload,
      };
    default: {
      return state;
    }
  }
};
