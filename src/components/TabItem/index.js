import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const tabButtonClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tabItem">
      <button
        type="button"
        onClick={onClickTabItem}
        className={tabButtonClassName}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
