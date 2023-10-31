import { useState } from 'react';

import { SendbirdProvider } from '@sendbird/uikit-react/SendbirdProvider';
import ChannelList from '@sendbird/uikit-react/ChannelList';
import Channel from '@sendbird/uikit-react/Channel';

import './../App.css';

export default function Private() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);

  return (
    <div className='App'>
      <SendbirdProvider
        appId={'B1C2424D-662D-477D-B7D5-5CFD9039CE22'}
        userId={'user001'}
        nickname={'user001'}
      >
        <div className='sendbird-app__wrap'>
          <div className='sendbird-app__channellist-wrap'>
            <ChannelList
              onChannelSelect={(channel) => {
                setCurrentChannelUrl(channel.url);
              }}
            />
          </div>
          <div className='sendbird-app__conversation-wrap'>
            <Channel channelUrl={currentChannelUrl} />
          </div>
        </div>
      </SendbirdProvider>
    </div>
  );
}
