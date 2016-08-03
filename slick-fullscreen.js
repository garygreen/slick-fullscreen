(function(window, $) {

	var slickFullscreen = {

		defaults: {
			target: 'a',
			closeIcon: true,
			closeOnEsc: true,
			closeOnBackdrop: false,
			slick: {}
		},

		/**
		 * Open full screen slick slider.
		 *
		 * @param  {jQuery} $slides
		 * @param  {object} options
		 * @return {void}
		 */
		open: function($slides, options) {

			options = $.extend({}, this.defaults, options);

			// Create new versions of the slides.
			var clonedSlides = [];
			$slides.each(function() {
				clonedSlides.push('<div><img src="' + slickFullscreen.getImageSource($(this)) + '"></div>');
			});

			var $container = $('<div class="slick-fullscreen">' + clonedSlides.join('') + '</div>');
			
			$('body').append($container);

			$container.slick(options.slick);

			if (options.closeIcon) {
				var $closeIcon = $('<span class="slick-fullscreen-close">X</span>');
				$closeIcon.on('click', function() {
					slickFullscreen.close();
				});
				$container.prepend($closeIcon);
			}

			$container.find('.slick-track').on('click.slick-fullscreen', '.slick-slide img', function(event) {
				event.stopPropagation();
				$container.slick('slickNext');
			});

			if (options.closeOnBackdrop) {
				$container.find('.slick-track').on('click.slick-fullscreen', function() {
					slickFullscreen.close();
				});
			}

			if (options.closeOnEsc) {
				$(document).on('keyup.slick-fullscreen', function(event) {
					// Escape
					if (event.keyCode == 27) {
						slickFullscreen.close();
					}
				});
			}

			this.options = options;
			this.$container = $container;
		},

		/**
		 * Get the source to the image.
		 *
		 * @param  {jQuery} $element
		 * @return {string}
		 */
		getImageSource: function($element) {
			if ($element.is('img')) {
				return $element.attr('src');
			}

			return $element.attr('href');
		},

		/**
		 * Close fullscreen slick.
		 *
		 * @return {void}
		 */
		close: function() {
			this.unbindEvents();
			this.$container.slick('unslick');
			this.$container.remove();			
		},

		/**
		 * Unbind events.
		 *
		 * @return {void}
		 */
		unbindEvents: function() {
			$(document).off('.slick-fullscreen');
			this.$container.find('.slick-track').off('.slick-fullscreen');
		}

	};

	$('[data-slick-fullscreen]').each(function() {
		var options = $(this).data('slick-fullscreen') || {};
		var $targets = $(options.target || slickFullscreen.defaults.target, this);

		$targets.on('click', function(event) {
			event.preventDefault();

			var slickOptions = options.slick || {};
			slickOptions.initialSlide = $(this).index();

			slickFullscreen.open($targets, $.extend({}, options, { slick: slickOptions }));
		});
	});

	window.slickFullscreen = slickFullscreen;

})(window, jQuery);
