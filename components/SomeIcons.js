import cxs from 'cxs'

export default () => (
  <div className={cx}>
    <a href="mailto:jere.piispanen@gmail.com" target="_blank">
      <i className="fa fa-2x fa-envelope-square" />
    </a>
    <a href="https://www.linkedin.com/in/jerep/" target="_blank">
      <i className="fa fa-2x fa-linkedin-square" />
    </a>
    <a href="https://github.com/jerep" target="_blank">
      <i className="fa fa-2x fa-github-square" />
    </a>
    <a href="https://www.instagram.com/jerepx/" target="_blank">
      <i className="fa fa-2x fa-instagram" />
    </a>
  </div>
)

const cx = cxs({
  'a:not(:last-child)': {
    marginRight: '10px'
  }
})
