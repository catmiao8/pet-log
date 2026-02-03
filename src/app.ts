import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'

import './app.scss'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.', process.env.TARO_APP_API_BASE_URL)
  })

  // children 是将要会渲染的页面
  return children
}

export default App
