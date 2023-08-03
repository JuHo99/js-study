// 모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById('delete-modal');

// 영화 추가 버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

// 영화 추가 모달안에 있는 확인, 취소버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

// 삭제 모달 버튼
const $deleteMovieDangerBtn = $deleteMovieModal.querySelector('.btn.btn--danger');
const $deleteMoviePassiveBtn = $deleteMovieModal.querySelector('.btn.btn--passive');

// 영화 추가 모달 안에 있는 입력엘리먼트들
const $userInputs = [
    ...$addMovieModal.querySelectorAll("input")
];
const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');

// 영화목록 ul태그
const $movieList = document.getElementById('movie-list');

const CLASS_VISIBLE = 'visible';

// 영화 정보 목록 배열
const movies = [];

let deleteIndex = 0;

let target = [];


// ===== 유틸함수, 일반함수 정의 ===== //

// 모든 인풋을 리셋하는 함수
const clearMovieModalInput = () => {
    $userInputs.forEach($input => $input.value = '');
};

// 영화추가모달을 닫는 함수
const closeAddModal = () => {
    $backdrop.classList.remove(CLASS_VISIBLE);
    $addMovieModal.classList.remove(CLASS_VISIBLE);
    clearMovieModalInput();
};

// 화면에 새로운 영화 정보를 렌더링하는 함수
const renderNewMovie = ({ id, title, image, rating }) => {
    const $newMovie = document.createElement('li');
    $newMovie.classList.add('movie-element');
    $newMovie.dataset.movieId = id;

    $newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${image}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating} / 5</p>
    </div>
  `;

    // 삭제를 진행하는 핸들러
    const deleteMovieHandler = e => {
        // delete모달에 class visible 달기
        $deleteMovieModal.classList.add(CLASS_VISIBLE);

        // 클릭한 태그의 근처 li의 movie-id값 가져오기
        const movieId = e.target.closest('.movie-element').dataset.movieId;

        // 배열에서 해당 아이디값을 가지는 객체를 찾아내고 인덱스를 알아내기
        deleteIndex = movies.findIndex(m => m.id === movieId);
        console.log(`클릭대상 인덱스: ${deleteIndex}`);

        target = e.target;

        // // 그 객체를 배열에서 지우기
        // movies.splice(deleteIndex, 1);
        // // 실제 li 지우기
        // e.target.closest('.movie-element').remove();
        // // 영화가 모두 삭제 되었을 때 entrytext를 보여줌
        // entrytextOpen();
    };

    const deleteMovieDanger =  () => {
        console.log(deleteIndex);
        movies.splice(deleteIndex, 1);
        deleteIndex.closest('.movie-element').remove();
        entrytextOpen();
        $deleteMovieModal.classList.remove(CLASS_VISIBLE);
    }



    // 삭제 클릭 이벤트
    $newMovie.addEventListener('click', deleteMovieHandler)

    $movieList.appendChild($newMovie);
};

// 영화 정보 입력란 검증 
const validateMovieInput = ({ title, image, rating }) => {
    if (
        title.trim() === '' ||
        image.trim() === '' ||
        rating.trim() === '' ||
        +rating < 1 || +rating > 5
    ) {
        return false;
    }
    return true;
}

// 배열에 객체가 존재할 시 entrytext를 숨겨주는 함수 작성
const entrytextClose = () => {
    if ($movieList.children.length > 0) {
        $entryTextSection.classList.add('colse-entry');
    }
};

// 배열에 lenght가 0일 때 entrytext를 보여주는 함수
const entrytextOpen = () => {
    if ($movieList.children.length === 0) {
        $entryTextSection.classList.remove('colse-entry');
    }
};

// =====  이벤트 핸들러 및 이벤트 바인딩 ===== //

// 영화 추가버튼 기능을 수행하는 핸들러
const addMovieHandler = e => {
    const titleValue = $titleInput.value; // 제목입력란값
    const imgUrlValue = $imgUrlInput.value; // 이미지경로
    const ratingValue = $ratingInput.value; // 평점입력값

    // 객체로 묶기
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue
    };

    // 검증
    if (!validateMovieInput(newMovie)) {
        alert('입력값이 유효하지 않습니다!');
        return;
    }

    // console.log(newMovie);
    movies.push(newMovie);
    console.log(movies);

    // 모달 닫기
    closeAddModal();
    // 화면에 입력한 영화정보 렌더링하기
    renderNewMovie(newMovie);
    // 영화가 추가 됐을 때 entry-text를 가려줌
    entrytextClose();

};

// 영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler = e => {
    $addMovieModal.classList.add(CLASS_VISIBLE);
    $backdrop.classList.add(CLASS_VISIBLE);
};

// 삭제 확인 버튼이 눌렸을 때
const deleteMovieModalDangerHandler = e => {
    console.log(deleteIndex);
    movies.splice(deleteIndex, 1);
    target.closest('.movie-element').remove();
    entrytextOpen();
    $deleteMovieModal.classList.remove(CLASS_VISIBLE);
}

// 삭제 취소 버튼이 눌렸을 때
const deleteMovieModalPassiveHandler = e => {
    $deleteMovieModal.classList.remove(CLASS_VISIBLE);
}


// 백드롭 영역을 클릭하면 모달이 닫히는 핸들러
const backdropHandler = e => {
    closeAddModal();
};
// 영화 추가 모달창의 취소버튼을 누르면 모달이 닫히는 핸들러
const closeMovieModalHandler = e => {
    closeAddModal();
};

// Add movie버튼 클릭이벤트
$addMovieButton.addEventListener('click', showMovieModalHandler);

// backdrop영역 클릭이벤트
$backdrop.addEventListener('click', backdropHandler);

// Add Movie모달 취소버튼 클릭이벤트
$cancelAddMovieButton.addEventListener('click', closeMovieModalHandler);

// Add Movie모달 추가버튼 클릭이벤트
$confirmAddMovieButton.addEventListener('click', addMovieHandler);

// delete모달 danger버튼 클릭 이벤트
$deleteMovieDangerBtn.addEventListener('click', deleteMovieModalDangerHandler);

// delete모달 Passive버튼 클릭 이벤트
$deleteMoviePassiveBtn.addEventListener('click', deleteMovieModalPassiveHandler);