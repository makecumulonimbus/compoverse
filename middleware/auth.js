export default function ({ store, app, route, redirect }) {
  const user = store.state.user

  if (route.path === '/signin') {
    if (user) {
      return redirect('/')
    }
  }

  if (route.path !== '/signin') {
    if (!user) {
      return redirect('/signin')
    }
  }
}
