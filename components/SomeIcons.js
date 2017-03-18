import cxs from 'cxs'

export default () => (
  <div>
    <a href="mailto:jere.piispanen@gmail.com" target="_blank">
      <i className={['fa fa-2x fa-envelope-square', cx.margin].join(' ')} />
    </a>
    <a href="https://www.linkedin.com/in/jerep/" target="_blank">
      <i className={['fa fa-2x fa-linkedin-square', cx.margin].join(' ')} />
    </a>
    <a href="https://github.com/jerep" target="_blank">
      <i className={['fa fa-2x fa-github-square', cx.margin].join(' ')} />
    </a>
    <a href="https://www.instagram.com/jerepx/" target="_blank">
      <i className="fa fa-2x fa-instagram" />
    </a>
  </div>
)

const cx = {
  margin: cxs({
    marginRight: '10px'
  })
}
