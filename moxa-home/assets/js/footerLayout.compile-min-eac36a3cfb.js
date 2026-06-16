/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
    /** *** */ 			? function getDefault() { return module.default; }
    /** *** */ 			: function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = 406);
/** *** */ }({

  /***/ 353:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'openModal', () => openModal);
    /* harmony import */ const _components_Aliyun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

    function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

    function _iterableToArray(iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter); }

    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

    let modalTrigger = $('.js-modal-trigger');
    const modalClose = $('.js-modal-close');
    const modalCloseEvent = document.createEvent('Event');
    modalCloseEvent.initEvent('modalClose', true, true);
    const modalOpenEvent = document.createEvent('Event');
    modalOpenEvent.initEvent('modalOpen', true, true);

    function closeModal(modal) {
      let _$2;

      if (!$('.is-active .prism-player video').length) {
        let _$;

        if ($('.modal.is-active').find('iframe').length) {
          const openedModalIframe = $('.modal.is-active iframe:not([src*="recaptcha"])');

          if (openedModalIframe.length && openedModalIframe[0].src !== '') {
            let videoURL = openedModalIframe.prop('src');
            videoURL = videoURL.replace('&autoplay=1', '');
            openedModalIframe.prop('src', '');
          }
        }

        const activeKalturaPlayer = (_$ = $('.is-active .kWidgetIframeContainer')) === null || _$ === void 0 ? void 0 : _$[0];

        if (activeKalturaPlayer) {
          activeKalturaPlayer.sendNotification('doPause');
        }
      } else {
        $('.is-active').find('video')[0].pause();
      }

      const activeHuodePlayer = (_$2 = $('.modal--video.is-active .CCH5playerContainer video')) === null || _$2 === void 0 ? void 0 : _$2[0];

      if (activeHuodePlayer) {
        activeHuodePlayer.pause();
      }

      const activeModals = _toConsumableArray(document.querySelectorAll('.modal.is-active:not([data-modal-mandatory]), .full-modal.is-active'));

      if (modal) {
        $(modal).removeClass('is-active');
        modal.dispatchEvent(modalCloseEvent);
        Object(_components_Aliyun__WEBPACK_IMPORTED_MODULE_0__.default)();
      } else if (activeModals.length > 1 && activeModals.some((modal) => modal.getAttribute('data-modal') === 'popup')) {
        const nonPopupModals = activeModals.filter((modal) => modal.getAttribute('data-modal') !== 'popup');
        $(nonPopupModals).removeClass('is-active');
        nonPopupModals.forEach((modal) => {
          modal.dispatchEvent(modalCloseEvent);
        });
      } else {
        $(activeModals).removeClass('is-active');
        activeModals.forEach((activeModal) => {
          activeModal.dispatchEvent(modalCloseEvent);
        });
      }

      if ($('.modal.is-active').length === 0) {
        $('html, body').removeClass('modal-active');
        $('.body-section').removeClass('ps-active');
      }
    }

    function initModal() {
      modalTrigger = $('.js-modal-trigger');
      modalTrigger.on('click', (event) => {
        openModalByTrigger(event.currentTarget);
      });
    }

    function openModalByTrigger(trigger) {
      let _$3; let _$4; let
        _modal$;

      closeModal();
      const modalId = trigger.getAttribute('data-modal-id');
      const modalVideo = trigger.getAttribute('data-video');
      const modalInternalVideo = trigger.getAttribute('data-internal-video');
      const modalHuodeVideo = (_$3 = $(".modal--video[data-modal='".concat(modalId, "'] .CCH5playerContainer video"))) === null || _$3 === void 0 ? void 0 : _$3[0];
      const kalturaVideo = (_$4 = $("[data-modal='".concat(modalId, "'] .kWidgetIframeContainer"))) === null || _$4 === void 0 ? void 0 : _$4[0];
      const modalImg = trigger.getAttribute('data-image');
      const hasModalPopupImg = trigger.hasAttribute('data-popup-image');
      const modalPopupImg = trigger.getAttribute('data-popup-image');
      const modalPopupImgMobile = trigger.getAttribute('data-popup-image-mobile');
      const modal = $('[data-modal="'.concat(modalId, '"]'));
      const isScrollable = trigger.classList.contains('js-modal-scrollable');

      if (modalVideo && !(modalVideo.indexOf('prism-player') > -1)) {
        modal.find('.iframe-block').empty().append(modalVideo);
        let videoURL = modal.find('iframe').prop('src');

        if (videoURL) {
          videoURL += ''.concat(videoURL.indexOf('?') > -1 ? '&' : '?', 'loop=1&autoplay=1&enablejsapi=1');
        }

        modal.find('iframe').prop('src', videoURL);

        if (document.getElementById('yt-iframe')) {
          const tag = document.createElement('script');
          tag.id = 'iframe-demo';
          tag.src = 'https://www.youtube.com/iframe_api';
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          tag.onload = function () {
            window.YT.ready(() => {
              const player = new YT.Player('yt-iframe', {
                events: {
                  onReady: function onReady(event) {
                    if (window.matchMedia('(max-width: 991px)').matches) {
                      event.target.mute();
                      event.target.playVideo();
                    }
                  },
                  onStateChange: function onStateChange(event) {
                    const statusCode = event.data;

                    if (statusCode === 0) {
                      setTimeout(() => {
                        closeModal();
                      }, 2000);
                    }
                  },
                },
              });
            });
          };
        }
      } else if (modalInternalVideo) {
        modal.find('.video-block').find('source').attr('src', modalInternalVideo);
        $('.video-block')[0].load();
      } else if (modalImg) {
        modal.find('.modal__container').empty().append('<img src="'.concat(modalImg, '"/>'));
      } else if (hasModalPopupImg) {
        const container = modal.find('.modal__wrap a').length ? modal.find('.modal__wrap a') : modal.find('.modal__wrap .modal__main-img');

        if (container) {
          if ($(window).width() > 767) {
            if (modalPopupImg) {
              container.empty().append('<img src="'.concat(modalPopupImg, '" alt="" />'));
            }
          } else if (modalPopupImgMobile) {
            container.empty().append('<img src="'.concat(modalPopupImgMobile, '" alt="" />'));
          }
        }
      } else if (modalHuodeVideo) {
        modalHuodeVideo.play();
      } else if (kalturaVideo) {
        kalturaVideo.sendNotification('doPlay');
      }

      if (modal.hasClass('modal--ps')) {
        let el = trigger;

        if (!el.classList.contains('js-modal-trigger')) {
          el = el.closest('.js-modal-trigger');
        }

        const index = el.getAttribute('data-img-index');

        if (el.getAttribute('data-img-index')) {
          // set related slideshow to ID
          const $carousel = $(modal).find('.product-carousel');
          $carousel[0].slick.goTo(index - 1);
        }

        $('.body-section').addClass('ps-active');
      }

      !isScrollable && $('html').toggleClass('modal-active');
      modal.addClass('is-active');
      modal === null || modal === void 0 ? void 0 : (_modal$ = modal[0]) === null || _modal$ === void 0 ? void 0 : _modal$.dispatchEvent(modalOpenEvent);
      Object(_components_Aliyun__WEBPACK_IMPORTED_MODULE_0__.default)();
    }

    window.openModalByTrigger = openModalByTrigger;

    function toggleModalById(modalId) {
      const modal = document.querySelector('[data-modal="'.concat(modalId, '"]'));

      if (modal) {
        const isModalOpened = modal.classList.contains('is-active');

        if (!isModalOpened) {
          openModal(modal);
        } else {
          closeModal();
        }
      }
    }

    window.toggleModalById = toggleModalById;
    function openModal(modal) {
      let _$5; let
        _$5$;

      if (!modal) return;
      $('html').addClass('modal-active');
      $(modal).addClass('is-active');
      (_$5 = $(modal)) === null || _$5 === void 0 ? void 0 : (_$5$ = _$5[0]) === null || _$5$ === void 0 ? void 0 : _$5$.dispatchEvent(modalOpenEvent);
    }
    modalClose.on('click', (e) => {
      const target = e.currentTarget;
      const modal = target.closest('.modal');
      closeModal(modal);
    });
    $(document).keydown((e) => {
      if (e.keyCode == 27) {
        const activeModal = document.querySelector('.modal.is-active');

        if (activeModal && !activeModal.hasAttribute('data-modal-disable-esc')) {
          closeModal();
        }
      }
    });
    $('body').on('click', '.modal', (event) => {
      if (!$(event.target).closest('.modal__container').length && !$(event.target).closest('.popup--container').length) {
        if (!event.target.hasAttribute('data-modal-stay-on-outside-click') && !event.target.closest('[data-modal-stay-on-outside-click]')) {
          const target = event.currentTarget;
          const activeModal = target.classList.contains('modal') && target.classList.contains('is-active') ? target : target.closest('.modal.is-active');

          if (activeModal) {
            closeModal(activeModal);
          }
        }
      }
    });
    $('.js-full-modal').on('click', (event) => {
      const modalId = event.currentTarget.getAttribute('data-modal-id');
      const modal = $('[data-modal="'.concat(modalId, '"]'));
      modal.addClass('is-active');
    });

    window.loadModalByModalId = function (id) {
      const el = document.querySelector('[data-modal-id="'.concat(id, '"]'));

      if (el) {
        el.click();
      }
    };

    window.dismissModal = function () {
      closeModal();
    };

    if (window.location.search.length) {
      const searchStr = window.location.search.substring(1);
      const searchArr = searchStr.split('&');
      searchArr.forEach((block) => {
        if (block.indexOf('=')) {
          const pair = block.split('=');

          if (/^active_modal$/.test(pair[0])) {
            const trigger = document.querySelector('[data-modal-id="'.concat(pair[1], '"]'));

            if (trigger) {
              trigger.click();
            }
          }
        }
      });
    }

    $(() => {
      initModal();
    });
    /***/ }),

  /***/ 358:
  /***/ (function (module, exports) {
    $(() => {
      $('.footer__media-link[data-modal-ref]').on('click', (ev) => {
        ev.preventDefault();
        const $trigger = ev.target.classList.contains('footer__media-link') ? $(ev.target) : $(ev.target).closest('.footer__media-link');
        const $target = $($trigger.attr('data-modal-ref'));
        const $parent = $target.parent();

        if ($target.length) {
          if ($parent.hasClass('active')) {
            $target.fadeOut();
            $target.parent().removeClass('active');
          } else {
            $target.fadeIn();
            $target.parent().addClass('active');
          }
        }
      });
      $('.footer__media-modal .footer__media-modal-header-close').on('click', (ev) => {
        ev.preventDefault();
        const $target = $(ev.target).closest('.footer__media-modal');
        const $parent = $target.parent();
        $target.fadeOut();
        $parent.removeClass('active');
      });
    });
    /***/ }),

  /***/ 406:
  /***/ (function (module, exports, __webpack_require__) {
    const footer = __webpack_require__(358);

    const languageDropdown = __webpack_require__(407);

    const footerNewsletterSubscription = __webpack_require__(408);

    const modal = __webpack_require__(353);

    window.regionModal = __webpack_require__(409); // const moxaProductCompare = require('./../../../global/moxaProductCompare.js');
    /***/ }),

  /***/ 407:
  /***/ (function (module, exports) {
    $('.language-dropdown__trigger').on('click', (event) => {
      $(event.target).parents('.language-dropdown').toggleClass('is-active');
    });
    $('body').on('click', (event) => {
      if (!$(event.target).closest('.language-dropdown').length) $('.language-dropdown').removeClass('is-active');
    });
    /***/ }),

  /***/ 408:
  /***/ (function (module, exports) {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const InitNewsletterSubscription = function InitNewsletterSubscription() {
      const form = document.querySelector('#form-footer-newsletter-subscription');
      const modalSignUp = document.querySelector('.modal--newsletter-subscription');
      const modalComplete = document.querySelector('.modal--newsletter-subscription-complete');

      if (form && modalSignUp && modalComplete) {
        const formEmailInput = form.querySelector('[type="email"]');
        const formSubmitButton = form.querySelector('.js-modal-trigger');
        const modalEmailField = modalSignUp.querySelector('.hidden-field--email');
        const modalSubmitButton = modalSignUp.querySelector('.fill-btn--main');
        const confirmationEmailContainer = modalComplete.querySelector('.email-value');

        if (formEmailInput && formSubmitButton && modalEmailField) {
          const checkboxes = [].slice.call(modalSignUp.querySelectorAll('[type="checkbox"]'));

          const _resetFormValues = function _resetFormValues() {
            formEmailInput.value = '';
            formSubmitButton.disabled = true;
            modalEmailField.value = '';
            checkboxes.forEach((checkbox) => checkbox.checked = false);
          };

          InitNewsletterSubscription.resetFormValues = _resetFormValues;

          const checkEmail = function checkEmail(ev) {
            const { value } = ev.target;
            formSubmitButton.disabled = !emailPattern.test(value);
          };

          const _onClick = function _onClick(ev) {
            modalEmailField.value = formEmailInput.value;
            const trigger = document.querySelector('[data-modal-trigger="newsletter-subscription"]');
            trigger && trigger.click();
          };

          formEmailInput.removeEventListener('input', checkEmail);
          formEmailInput.addEventListener('input', checkEmail);
          formSubmitButton.removeEventListener('click', _onClick);
          formSubmitButton.addEventListener('click', _onClick); // checkboxes.forEach(checkbox => checkbox.removeEventListener('change', countCheckboxes));
          // checkboxes.forEach(checkbox => checkbox.addEventListener('change', countCheckboxes));

          if (modalSubmitButton && confirmationEmailContainer) {
            const updateConfirmationEmail = function updateConfirmationEmail() {
              confirmationEmailContainer.textContent = formEmailInput.value;

              _resetFormValues();
            };

            modalSubmitButton.removeEventListener('click', updateConfirmationEmail);
            modalSubmitButton.addEventListener('click', updateConfirmationEmail);
          }
        }

        form.classList.add('loaded');
      }
    };

    (function () {
      InitNewsletterSubscription();
    }());

    window.InitNewsletterSubscription = InitNewsletterSubscription;
    /***/ }),

  /***/ 409:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _utilities_fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function _asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    window.addEventListener('DOMContentLoaded', /* #__PURE__ */_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
      let cookieCulture; let currentCulture; let isSetToCurrentCulture; let shouldRender; let modalData; let modalButton; let RedirectCulture; let Url; let
        Text;
      return regeneratorRuntime.wrap((_context) => {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cookieCulture = getCookie('ModalSelectedCulture');
              currentCulture = typeof a_culture !== 'undefined' ? a_culture : '';
              isSetToCurrentCulture = cookieCulture === currentCulture;
              _context.next = 5;
              return getModalVisibilityFlag();

            case 5:
              _context.t0 = _context.sent;

              if (!_context.t0) {
                _context.next = 8;
                break;
              }

              _context.t0 = !isSetToCurrentCulture;

            case 8:
              if (!_context.t0) {
                _context.next = 12;
                break;
              }

              _context.t1 = true;
              _context.next = 13;
              break;

            case 12:
              _context.t1 = false;

            case 13:
              shouldRender = _context.t1;
              _context.next = 16;
              return getModalData();

            case 16:
              modalData = _context.sent;
              modalButton = document.querySelector('.modal--region-redirect .modal__actions > :not([data-culture="'.concat(currentCulture, '" i])'));

              if (modalButton && modalData) {
                RedirectCulture = modalData.RedirectCulture, Url = modalData.Url, Text = modalData.Text;
                modalButton.href = Url;

                if (modalButton.firstElementChild) {
                  modalButton.firstElementChild.textContent = Text;
                }

                modalButton.setAttribute('data-culture', RedirectCulture);
              }

              if (shouldRender) {
                toggleRegionRedirectModal();
              }

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })));

    function getModalVisibilityFlag() {
      return _getModalVisibilityFlag.apply(this, arguments);
    }

    function _getModalVisibilityFlag() {
      _getModalVisibilityFlag = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
        let response;
        return regeneratorRuntime.wrap((_context2) => {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof a_culture === 'undefined')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', false);

              case 2:
                _context2.next = 4;
                return Object(_utilities_fetch_data__WEBPACK_IMPORTED_MODULE_0__[/* fetchJSONData */ 'a'])('/CMSGlobalFiles/Moxa/CultureRedirect.ashx', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    Culture: a_culture,
                  }),
                });

              case 4:
                response = _context2.sent;
                return _context2.abrupt('return', response !== null && response !== void 0 && response.Response ? !!(response !== null && response !== void 0 && response.Response) : false);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _getModalVisibilityFlag.apply(this, arguments);
    }

    function getModalData() {
      return _getModalData.apply(this, arguments);
    }

    function _getModalData() {
      _getModalData = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3() {
        let response;
        return regeneratorRuntime.wrap((_context3) => {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof a_culture === 'undefined')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', false);

              case 2:
                _context3.next = 4;
                return Object(_utilities_fetch_data__WEBPACK_IMPORTED_MODULE_0__[/* fetchJSONData */ 'a'])('/CMSGlobalFiles/Moxa/CultureRedirectData.ashx', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    Culture: a_culture,
                  }),
                });

              case 4:
                response = _context3.sent;
                return _context3.abrupt('return', response || null);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _getModalData.apply(this, arguments);
    }

    function toggleRegionRedirectModal() {
      setTimeout(() => {
        toggleModalById('region-redirect');
      }, 1000);
    }
    /***/ }),

  /***/ 62:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', () => fetchJSONData);
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

    function _asyncToGenerator(fn) {
      return function () {
        const self = this; const
          args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
      };
    }

    function fetchJSONData(_x, _x2) {
      return _fetchJSONData.apply(this, arguments);
    }

    function _fetchJSONData() {
      _fetchJSONData = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee(url, option) {
        return regeneratorRuntime.wrap((_context) => {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (url) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                _context.next = 4;
                return fetch(url, option).then((res) => {
                  let data = null;

                  if (res.ok) {
                    try {
                      data = res.json();
                    } catch (_unused) {}
                  }

                  return data;
                }).catch((err) => {
                  console.log(err);
                });

              case 4:
                return _context.abrupt('return', _context.sent);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchJSONData.apply(this, arguments);
    }
    /***/ }),

  /***/ 74:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', () => InitCaptcha);
    function InitCaptcha() {
      const activeModalDom = document.querySelector('.modal.is-active');

      if (activeModalDom) {
        if (window.initAliyunCaptcha) {
          const elementDoc = activeModalDom.querySelector('.aliyunRecaptchaElement');
          const buttonDoc = activeModalDom.querySelector('.aliyunRecaptchaButton');
          const elementId = `aliyunRecaptchaElement${GetUUId()}`;
          const buttonId = `aliyunRecaptchaButton${GetUUId()}`;
          elementDoc.id = elementId;
          buttonDoc.id = buttonId;
          let captcha; // 寮瑰嚭寮忥紝闄egion鍜宲refix浠ュ鐨勫弬鏁�

          window.initAliyunCaptcha({
            // 鍦烘櫙ID銆傛牴鎹楠や簩鏂板缓楠岃瘉鍦烘櫙鍚庯紝鎮ㄥ彲浠ュ湪楠岃瘉鐮佸満鏅垪琛紝鑾峰彇璇ュ満鏅殑鍦烘櫙ID
            SceneId: 'pb4e5v6v',
            // 楠岃瘉鐮佹ā寮忥紝popup琛ㄧず寮瑰嚭寮忥紝embed琛ㄧず宓屽叆寮忋€傛棤闇€淇敼
            mode: 'embed',
            // 椤甸潰涓婇鐣欑殑娓叉煋楠岃瘉鐮佺殑鍏冪礌锛屼笌鍘熶唬鐮佷腑棰勭暀鐨勯〉闈㈠厓绱犱繚鎸佷竴鑷淬€�
            element: `#${elementId}`,
            // 瑙﹀彂楠岃瘉鐮佸脊绐楁垨鏃犵棔楠岃瘉鐨勫厓绱�
            button: `#${buttonId}`,
            // 楠岃瘉鐮侀獙璇侀€氳繃鍥炶皟鍑芥暟
            success: function success(captchaVerifyParam) {
              // 鍏ュ弬涓洪獙绛綾aptchaVerifyParam
              // 1.鍚戝悗绔彂璧蜂笟鍔¤姹傝繘琛岄獙璇佺爜楠岀captchaVerifyParam鏍￠獙
              // 2.鏍规嵁鏍￠獙缁撴灉鏉ヨ繘琛屼笟鍔″鐞�
              // 3.濡備笟鍔￠渶瑕侀噸鏂拌繘琛岄獙璇佺爜楠岃瘉锛岃皟鐢ㄩ獙璇佺爜鍒濆鍖栨柟娉昳nitAliyunCaptcha閲嶆柊鍒濆鍖栭獙璇佺爜
              console.log(captchaVerifyParam);
              activeModalDom.querySelector('[id$=hAliyunRecaptchaVerifyParam]').value = captchaVerifyParam;
            },
            // 楠岃瘉鐮侀獙璇佷笉閫氳繃鍥炶皟鍑芥暟
            fail: function fail(result) {
              // 鍏ュ弬涓轰笉閫氳繃淇℃伅
              // 姝ｅ父楠岃瘉鏈夋晥鏈熷唴涓嶉渶瑕佸仛浠讳綍鎿嶄綔锛岄獙璇佺爜鑷姩鍒锋柊锛岄噸鏂拌繘琛岄獙璇�
              console.error(result);
            },
            // 缁戝畾楠岃瘉鐮佸疄渚嬪洖璋冨嚱鏁帮紝璇ュ洖璋冧細鍦ㄩ獙璇佺爜鍒濆鍖栨垚鍔熷悗璋冪敤
            getInstance: function getInstance(instance) {
              captcha = instance;
            },
            // 婊戝潡楠岃瘉鍜屼竴鐐瑰嵆杩囩殑楠岃瘉褰㈡€佽Е鍙戞浣撴牱寮忥紝鏀寔鑷畾涔夊搴﹀拰楂樺害锛屽崟浣嶄负px銆�
            slideStyle: {
              width: 300,
              height: 34,
            }, // ...鍏朵粬鍙傛暟锛屽弬鑰僫nitAliyunCaptcha鍙傛暟璇存槑

          });
        }
      } else {
        const captchDom = document.getElementById('aliyunRecaptchaElement');
        window.aliyunCaptchaInitCount = 0;
        var aliyunCaptchaInterval = setInterval(() => {
          if (window.aliyunCaptchaInitCount++, window.aliyunCaptchaInitCount > 10) {
            clearInterval(aliyunCaptchaInterval);
            window.aliyunCaptchaInitCount = undefined;
            return;
          }

          if (captchDom && window.initAliyunCaptcha) {
            let captcha; // 瀵懓鍤蹇ョ礉闂勵槝egion閸滃refix娴犮儱顦婚惃鍕棘閺侊拷

            window.initAliyunCaptcha({
              // 閸︾儤娅橧D閵嗗倹鐗撮幑顔筋劄妤犮倓绨╅弬鏉跨紦妤犲矁鐦夐崷鐑樻珯閸氬函绱濋幃銊ュ讲娴犮儱婀宀冪槈閻礁婧€閺咁垰鍨悰顭掔礉閼惧嘲褰囩拠銉ユ簚閺咁垳娈戦崷鐑樻珯ID
              SceneId: 'pb4e5v6v',
              // 妤犲矁鐦夐惍浣鼓佸蹇ョ礉popup鐞涖劎銇氬鐟板毉瀵骏绱漞mbed鐞涖劎銇氬畵灞藉弳瀵繈鈧倹妫ら棁鈧穱顔芥暭
              mode: 'embed',
              // 妞ょ敻娼版稉濠囶暕閻ｆ瑧娈戝〒鍙夌厠妤犲矁鐦夐惍浣烘畱閸忓啰绀岄敍灞肩瑢閸樼喍鍞惍浣疯厬妫板嫮鏆€閻ㄥ嫰銆夐棃銏犲帗缁辩姳绻氶幐浣风閼锋番鈧拷
              element: '#aliyunRecaptchaElement',
              // 鐟欙箑褰傛宀冪槈閻礁鑴婄粣妤佸灗閺冪姷妫旀宀冪槈閻ㄥ嫬鍘撶槐锟�
              button: '#aliyunRecaptchaButton',
              // 妤犲矁鐦夐惍渚€鐛欑拠渚€鈧俺绻冮崶鐐剁殶閸戣姤鏆�
              success: function success(captchaVerifyParam) {
                // 閸忋儱寮稉娲崣缁涚毒aptchaVerifyParam
                // 1.閸氭垵鎮楃粩顖氬絺鐠ц渹绗熼崝陇顕Ч鍌濈箻鐞涘矂鐛欑拠浣虹垳妤犲瞼顒穋aptchaVerifyParam閺嶏繝鐛�
                // 2.閺嶈宓侀弽锟犵崣缂佹挻鐏夐弶銉ㄧ箻鐞涘奔绗熼崝鈥愁槱閻烇拷
                // 3.婵″倷绗熼崝锟犳付鐟曚線鍣搁弬鎷岀箻鐞涘矂鐛欑拠浣虹垳妤犲矁鐦夐敍宀冪殶閻€劑鐛欑拠浣虹垳閸掓繂顫愰崠鏍ㄦ煙濞夋槼nitAliyunCaptcha闁插秵鏌婇崚婵嗩潗閸栨牠鐛欑拠浣虹垳
                console.log(captchaVerifyParam);
                const recaptchaBlock = captchDom.closest('.recaptcha-block');
                recaptchaBlock.querySelector('[id$=hAliyunRecaptchaVerifyParam]').value = captchaVerifyParam;
              },
              // 妤犲矁鐦夐惍渚€鐛欑拠浣风瑝闁俺绻冮崶鐐剁殶閸戣姤鏆�
              fail: function fail(result) {
                // 閸忋儱寮稉杞扮瑝闁俺绻冩穱鈩冧紖
                // 濮濓絽鐖舵宀冪槈閺堝鏅ラ張鐔峰敶娑撳秹娓剁憰浣镐粵娴犺缍嶉幙宥勭稊閿涘矂鐛欑拠浣虹垳閼奉亜濮╅崚閿嬫煀閿涘矂鍣搁弬鎷岀箻鐞涘矂鐛欑拠锟�
                console.error(result);
              },
              // 缂佹垵鐣炬宀冪槈閻礁鐤勬笟瀣礀鐠嬪啫鍤遍弫甯礉鐠囥儱娲栫拫鍐х窗閸︺劑鐛欑拠浣虹垳閸掓繂顫愰崠鏍ㄥ灇閸旂喎鎮楃拫鍐暏
              getInstance: function getInstance(instance) {
                captcha = instance;
              },
              // 濠婃垵娼℃宀冪槈閸滃奔绔撮悙鐟板祮鏉╁洨娈戞宀冪槈瑜般垺鈧浇袝閸欐垶顢嬫担鎾寸壉瀵骏绱濋弨顖涘瘮閼奉亜鐣炬稊澶婎啍鎼达箑鎷版妯哄閿涘苯宕熸担宥勮礋px閵嗭拷
              slideStyle: {
                width: 300,
                height: 34,
              }, // ...閸忔湹绮崣鍌涙殶閿涘苯寮懓鍍玭itAliyunCaptcha閸欏倹鏆熺拠瀛樻

            });
            clearInterval(aliyunCaptchaInterval);
            window.aliyunCaptchaInitCount = undefined;
          }
        }, 1000);
      }
    }
    window.InitCaptcha = InitCaptcha; // for initializing the Aliyun Recaptcha in one modal with dynamic id

    function GetUUId() {
      let d = Date.now();

      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); // use high-precision timer if available
      }

      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }
    /***/ }),

/** *** */ }));
