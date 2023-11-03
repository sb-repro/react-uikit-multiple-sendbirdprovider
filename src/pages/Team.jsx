import { useState } from "react";
import ChannelList from "@sendbird/uikit-react/ChannelList";
import Channel from "@sendbird/uikit-react/Channel";

import "./../App.css";

export default function Team() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);

  return (
    <div className="App">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap">
          <ChannelList
            onChannelSelect={(channel) => {
              setCurrentChannelUrl(channel.url);
            }}
          />
        </div>
        <div className="sendbird-app__conversation-wrap">
          <Channel channelUrl={currentChannelUrl} />
        </div>
      </div>
    </div>
  );
}
