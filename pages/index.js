import cxs from 'cxs'
import SomeIcons from '../components/SomeIcons'

export default () => (
  <div className={cx.root}>
    <div className={cx.card}>
      <div className={cx.left}>
        <img className={cx.avatar} src="/static/avatar.jpg" />
      </div>
      <div className={cx.body}>
        <h1>{'Jere Piispanen'}</h1>
        <p>{'Front-end developer based in Helsinki, Finland.'}</p>
        <p>
          {'Currently working for '}
          <a href="https://www.freska.fi">{'Freska'}</a>
          {'.'}
        </p>
        <SomeIcons />
      </div>
    </div>
  </div>
)

const cx = {
  root: cxs({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#000',
    fontSize: '16px',
  }),
  card: cxs({
    display: 'flex',
    alignItems: 'flex-start',
    h1: {
      fontSize: '16px',
      marginTop: 0
    },
    a: {
      color: '#000',
      fontWeight: 'bold',
      textDecoration: 'none',
      ':hover': {
        opacity: 0.6
      }
    }
  }),
  left: cxs({
    display: 'flex',
    marginRight: '40px'
  }),
  avatar: cxs({
    width: '128px',
    height: '128px',
    'box-shadow': '0px 4px 10px rgba(0,0,0,0.25)'
  }),
  body: cxs({
    flex: 1
  }),
  title: cxs({
    fontWeight: 'bold'
  })
}
