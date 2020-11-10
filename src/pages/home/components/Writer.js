import React, { PureComponent } from 'react';
import * as HomeStyle from '../style';

class Writer extends PureComponent {
  render() {
    return (
      <HomeStyle.WriterWrapper>
        <HomeStyle.WriterInfoTitle>
          推荐作者
          <HomeStyle.WriterInfoSwitch>
            <i className="iconfont spin">&#xe851;</i>
            换一批
          </HomeStyle.WriterInfoSwitch>
        </HomeStyle.WriterInfoTitle>
        <HomeStyle.WriterInfoList>
          <HomeStyle.WriterInfoItem>
            <img className='writer-pic' alt=""
                 src="https://upload.jianshu.io/users/upload_avatars/278/3d103a3cbb96.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            />
            <HomeStyle.WriterDesc>
              <HomeStyle.WriterName>WriterName</HomeStyle.WriterName>
              <HomeStyle.WriterInfo>WriterInfo--123123</HomeStyle.WriterInfo>
            </HomeStyle.WriterDesc>
          </HomeStyle.WriterInfoItem>
        </HomeStyle.WriterInfoList>
      </HomeStyle.WriterWrapper>
    )
  }
}

export default Writer;
