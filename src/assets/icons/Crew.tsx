import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import Svg, {G, Path, Polyline} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const CrewIcon = (props: Props) => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
      <G fill="none" fillRule="evenodd">
        <G fill={props.color}>
          <G>
            <G>
              <G>
                <G>
                  <Path
                    d="M10 .5c2.761 0 5 2.239 5 5 0 1.421-.593 2.704-1.545 3.614C17.275 10.519 20 14.19 20 18.5c0 .513-.386.936-.883.993L19 19.5H1c-.552 0-1-.448-1-1 0-4.309 2.725-7.98 6.545-9.387C5.593 8.203 5 6.92 5 5.5c0-2.761 2.239-5 5-5zm0 10c-3.914 0-7.172 2.811-7.864 6.525l-.043.25-.031.225h15.875l-.03-.226c-.565-3.673-3.628-6.522-7.4-6.758l-.258-.012L10 10.5zm0-8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
                    transform="translate(-273 -53) translate(265 45) translate(8 8) translate(2 2)"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default CrewIcon;