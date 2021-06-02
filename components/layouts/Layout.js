import Meta from '../Meta'
import DashboardLayout from './Dashboard'

export default function Layout(props) {
  return (
    <>
      <Meta />
      {props.children.type.layout !== 'login'
        ? <DashboardLayout {...props}>{props.children}</DashboardLayout>
        : props.children}
    </>
  )
}
