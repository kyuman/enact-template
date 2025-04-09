import LS2Request from '@enact/webos/LS2Request'

const NotificationService = {
  getNotifications: () => {
    return new Promise(resolve => {
        resolve([
          {
            id: 1,
            date: '2023년 3월 1일',
            title: '새로운 알림 1',
            message: '알림 내용 1입니다.'
          },
          {
            id: 2,
            date: '2023년 3월 2일',
            title: '새로운 알림 2',
            message: '알림 내용 2입니다.'
          },
          {
            id: 3,
            date: '2023년 3월 3일',
            title: '새로운 알림 3',
            message: '알림 내용 3입니다.'
          }
      ])
    })
  },

  createNotification: (msg) => {
    // 알림 생성
    // luna-send -n 1 -f -a com.webos.app.test luna://com.webos.notification/createToast '{"message":"hello world"}'
    return new Promise(resolve => {
      console.log('createNotification : ', msg)
      if (window.PalmServiceBridge) {
        new LS2Request().send({
          service: 'luna://com.webos.notification',
          method: 'createToast',
          parameters: {
            message: msg
          },
          onSuccess: response => {
            resolve(response)
          },
          onFailure: () => {
            resolve(false)
          }
        })
      } else {
        // 개발 환경용 더미 응답
        resolve({
          returnValue: true
        })
      }
    })
  }
}

export default NotificationService