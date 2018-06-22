import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  store.dispatch({
    type: 'ADD_SONG',
    data: {
      title,
    }
  })
  document.getElementById('input').value = '';
}

const initialState = [
  {
    "title": "Despacito",
  },
  {
    "title": "One more time",
  },
  {
    "title": "Échame la culpa"
  }
]

const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.data]
    default: 
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $container = document.getElementById('playlist');

function render() {
  const playlist = store.getState();
  $container.innerHTML = '';

  playlist.forEach(item => {
    const template = document.createElement('p');
    $container.appendChild(template);
    template.textContent = item.title;
  })
}

render();

function handleChange() {
  render();
}

store.subscribe(handleChange);