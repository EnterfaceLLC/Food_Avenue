import 'react-native-gesture-handler';

//* AWS IMPORT//
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';


//* ROOT IMPORT//
import Root from './src/util/Root';


//* APP CODE//
Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  return (
    <Root />
  );
};

export default withAuthenticator(App);
