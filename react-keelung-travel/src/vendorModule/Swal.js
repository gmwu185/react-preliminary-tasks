import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ReactContentSwal = withReactContent(Swal);

const SwalLoader = (setTimer = 700) => {
  Swal.fire({
    html: `<small>載入中 ...</small>`,
    timer: setTimer,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}

const msgSwal = (msgStr) => {
  return ReactContentSwal.fire({
    html: `<small>${msgStr}</small>`,
  })
}

export {
  SwalLoader,
  msgSwal,
};
