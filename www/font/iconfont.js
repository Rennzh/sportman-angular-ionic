;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tab-stadium-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.209 673.764c-146.842 92.283-236.831 136.049-373.043 131.523-136.212-4.506-483.123-247.173-483.369-294.625-0.266-47.473 3.052-76.841 21.012-115.753 56.402 72.786 281.948 226.202 493.896 242.012 211.948 15.811 429.691-145.859 420.332-194.662 23.491 74.752 68.014 139.223-78.828 231.506zM589.223 589.592c-143.442-6.431-450.089-130.601-493.896-210.452-20.828-64.84 233.062-142.766 362.537-131.543s488.243 106.885 493.896 163.103c5.632 56.218-219.116 185.303-362.537 178.893zM342.275 294.946c-12.145-7.291-59.515 10.179-64.655 19.907-5.14 9.748 40.673 56.791 47.882 58.86 7.209 2.089 46.203-10.076 48.292-15.647 2.089-5.53-19.374-55.828-31.519-63.119zM377.767 284.337c-7.004 6.615 31.846 65.024 38.072 68.485s105.697-3.359 110.326-5.263c4.649-1.905 25.743-31.601 23.552-58.86-21.524-22.958-164.946-10.977-171.95-4.362zM582.383 293.062c-8.376 1.925-23.429 59.638-19.436 65.024s52.552 15.79 52.552 15.79 34.324-55.276 31.519-63.14-56.259-19.599-64.635-17.674zM686.872 321.406c-6.963 2.519-31.662 64.082-29.348 68.26 2.314 4.157 46.346 18.309 52.552 15.79 6.205-2.519 42.476-49.93 39.936-57.876-2.56-7.946-56.197-28.692-63.14-26.173zM773.113 363.349c-24.392 75.244-162.427 107.438-241.684 105.226-79.258-2.212-224.952-72.008-283.73-136.786 0 0-57.303-5.55-42.025 36.823 15.258 42.394 250.941 126.853 352.031 136.786s222.003-60.662 252.191-84.173c30.188-23.511 4.403-48.497-36.782-57.876z" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-me-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.359952 509.48369c-125.273145 0-227.134067-101.916181-227.134067-227.136114 0-125.272122 101.860922-227.186256 227.134067-227.186256 125.217886 0 227.134067 101.915158 227.134067 227.186256C749.494019 407.567509 647.577838 509.48369 522.359952 509.48369L522.359952 509.48369zM522.359952 105.653295c-97.426937 0-176.695305 79.266321-176.695305 176.694281 0 97.430006 79.268368 176.643116 176.695305 176.643116 97.428983 0 176.643116-79.212086 176.643116-176.643116C699.003068 184.919617 619.788935 105.653295 522.359952 105.653295L522.359952 105.653295zM196.865693 862.823134l30.03506-270.186605 140.260487-56.128345 18.764366 46.880727-112.200408 44.856627-20.458961 184.138834L802.613844 812.384371l-20.458961-184.138834-112.147196-44.856627 18.763342-46.880727 140.210345 56.128345 30.03199 270.186605L196.865693 862.823134 196.865693 862.823134z" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-activity-off" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M58.937 298.365c0 0 143.949 25.407 323.454-13.544 0 0 81.294-22.016 149.029 17.782 0 0 121.933 49.112 30.483 174.433 0 0-219.582 328.819-508.609 433.813 0 0-82.42 62.094 18.06 29.356 100.485-32.744 202.092-91.443 390.633-199.825 0 0 342.085-247.259 286.197-386.126 0 0-37.252-150.718-204.91-150.718 0 0-78.748-0.849-138.866 14.393 0 0-68.583 12.704-131.247 27.945 0 0-150.72 16.932-204.062 11.853C69.099 257.726-77.106 251.235 58.937 298.365L58.937 298.365zM58.937 298.365"  ></path>' +
    '' +
    '<path d="M717.144 548.438c0 0-74.518 95.971-136.604 136.617 0 0-20.32 28.229 21.447 16.933 0 0 211.121-111.776 383.857 29.356 0 0 65.488 34.998 22.581-29.356 0 0-75.645-126.447-174.997-146.768C833.428 555.213 784.885 536.021 717.144 548.438L717.144 548.438zM717.144 548.438"  ></path>' +
    '' +
    '<path d="M854.882 164.58c0 49.884-40.439 90.321-90.323 90.321-49.87 0-90.316-40.438-90.316-90.321 0-49.878 40.446-90.317 90.316-90.317C814.442 74.263 854.882 114.702 854.882 164.58L854.882 164.58zM854.882 164.58"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-social-github" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.957333 12.650667C229.248 12.650667 0 241.877333 0 524.672c0 226.197333 146.688 418.090667 350.165333 485.802667 25.6 4.693333 34.944-11.093333 34.944-24.682667 0-12.16-0.426667-44.352-0.682666-87.082667-142.421333 30.933333-172.48-68.629333-172.48-68.629333C188.672 770.944 155.093333 755.2 155.093333 755.2c-46.485333-31.786667 3.52-31.146667 3.52-31.146667 51.392 3.626667 78.421333 52.778667 78.421334 52.778667 45.674667 78.229333 119.829333 55.637333 149.013333 42.538667 4.650667-33.066667 17.877333-55.658667 32.512-68.437334-113.706667-12.928-233.216-56.853333-233.216-253.056 0-55.893333 19.946667-101.589333 52.693333-137.386666-5.269333-12.949333-22.826667-65.002667 5.013334-135.509334 0 0 42.986667-13.76 140.8 52.48 40.832-11.349333 84.629333-17.024 128.170666-17.216 43.477333 0.213333 87.296 5.866667 128.192 17.237334 97.749333-66.261333 140.650667-52.48 140.650667-52.48 27.946667 70.485333 10.368 122.538667 5.098667 135.466666 32.810667 35.818667 52.629333 81.514667 52.629333 137.408 0 196.693333-119.701333 239.978667-233.770667 252.650667 18.389333 15.786667 34.773333 47.061333 34.773334 94.805333 0 68.458667-0.64 123.669333-0.64 140.458667 0 13.696 9.216 29.632 35.2 24.618667C877.44 942.570667 1024 750.784 1024 524.672 1024 241.877333 794.730667 12.650667 511.957333 12.650667z" fill="#191717" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M758.187 527.659c-39.808-7.723-20.438-29.227-20.438-29.227s38.912-64.341-7.68-111.147c-57.856-57.941-198.4 7.382-198.4 7.382-53.632 16.682-39.381-7.638-31.786-49.024 0-48.726-16.683-131.243-159.616-82.518C197.46 312.15 74.795 483.797 74.795 483.797-10.453 597.888 0.853 686.08 0.853 686.08c21.334 194.688 227.584 248.107 388.011 260.736 168.79 13.27 396.672-58.325 465.707-205.44 69.12-147.37-56.448-205.653-96.427-213.675zM401.408 891.904c-167.637 7.85-303.061-76.373-303.061-188.501 0-112.256 135.424-202.24 303.061-210.006 167.68-7.765 303.36 61.526 303.36 173.526 0 112.128-135.68 217.344-303.36 224.981z" fill="#E63C53" ></path>' +
    '' +
    '<path d="M367.915 567.339C199.38 587.093 218.88 745.387 218.88 745.387s-1.707 50.09 45.227 75.648c98.56 53.546 200.106 21.12 251.434-45.312 51.286-66.432 21.206-228.054-147.626-208.384zM325.419 789.46c-31.446 3.712-56.832-14.506-56.832-40.874 0-26.283 22.528-53.803 54.016-57.088 36.138-3.456 59.733 17.408 59.733 43.818 0 26.283-25.557 50.56-56.917 54.187z m99.37-84.864c-10.666 8.022-23.765 6.912-29.397-2.688-5.888-9.344-3.67-24.32 7.083-32.17 12.501-9.344 25.472-6.656 31.146 2.688 5.632 9.6 1.579 23.936-8.832 32.17z m415.488-245.461a27.435 27.435 0 0 0 27.435-26.155c20.565-185.6-151.68-153.6-151.68-153.6a27.605 27.605 0 0 0-27.52 27.862c0 15.189 12.245 27.605 27.52 27.605 123.733-27.392 96.427 96.64 96.427 96.64 0 15.36 12.458 27.648 27.818 27.648z" fill="#E63C53" ></path>' +
    '' +
    '<path d="M820.224 135.253c-59.605-13.994-120.832-1.92-137.984 1.366-1.28 0.128-2.56 1.365-3.797 1.621-0.598 0.128-0.939 0.725-0.939 0.725a40.533 40.533 0 0 0 10.88 79.36s21.675-2.901 36.352-8.661c14.592-5.888 137.899-4.395 199.21 98.73 33.409 75.307 14.678 125.654 12.374 133.76 0 0-7.979 19.585-7.979 38.827 0 22.187 17.878 36.182 40.022 36.182 18.517 0 34.048-2.56 38.613-33.92h0.256c65.792-219.776-80.47-323.072-187.008-347.99z" fill="#E63C53" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-find-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.666667 341.333333m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z" fill="#fb8041" ></path>' +
    '' +
    '<path d="M512 341.333333c25.6 0 42.666667-17.066667 42.666667-42.666666s-17.066667-42.666667-42.666667-42.666667c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256c0-25.6-17.066667-42.666667-42.666667-42.666667s-42.666667 17.066667-42.666666 42.666667c0 93.866667-76.8 170.666667-170.666667 170.666667s-170.666667-76.8-170.666667-170.666667 76.8-170.666667 170.666667-170.666667z" fill="#fb8041" ></path>' +
    '' +
    '<path d="M512 0C422.4 0 332.8 25.6 256 68.266667c-21.333333 12.8-25.6 38.4-17.066667 59.733333 12.8 21.333333 38.4 25.6 59.733334 12.8C362.666667 106.666667 435.2 85.333333 512 85.333333c234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667S85.333333 746.666667 85.333333 512c0-76.8 21.333333-149.333333 55.466667-213.333333 12.8-21.333333 4.266667-46.933333-12.8-59.733334s-46.933333-4.266667-59.733333 17.066667C25.6 332.8 0 422.4 0 512c0 281.6 230.4 512 512 512s512-230.4 512-512S793.6 0 512 0z" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M503.04 408.32c17.92 0 30.72-12.8 30.72-30.72 0-17.92-11.52-30.72-30.72-30.72-17.92 0-37.12 11.52-37.12 30.72 0 17.92 17.92 30.72 37.12 30.72zM582.4 524.8c-11.52 0-24.32 12.8-24.32 24.32 0 12.8 12.8 24.32 24.32 24.32 19.2 0 30.72-11.52 30.72-24.32 0-11.52-12.8-24.32-30.72-24.32z" fill="#66C72A" ></path>' +
    '' +
    '<path d="M512 0C229.12 0 0 229.12 0 512s229.12 512 512 512 512-229.12 512-512S794.88 0 512 0zM410.88 659.2c-30.72 0-55.04-6.4-85.76-12.8l-85.76 42.24 24.32-72.96c-61.44-42.24-97.28-98.56-97.28-165.12 0-115.2 110.08-207.36 244.48-207.36 120.32 0 225.28 72.96 247.04 171.52-7.68-1.28-15.36-1.28-23.04-1.28-116.48 0-207.36 87.04-207.36 193.28 0 17.92 2.56 34.56 7.68 51.2-8.96 1.28-16.64 1.28-24.32 1.28z m360.96 85.76l17.92 61.44-66.56-37.12c-24.32 6.4-48.64 12.8-72.96 12.8-116.48 0-208.64-79.36-208.64-177.92 0-97.28 92.16-177.92 208.64-177.92 110.08 0 207.36 79.36 207.36 177.92 0 55.04-37.12 103.68-85.76 140.8z" fill="#66C72A" ></path>' +
    '' +
    '<path d="M716.8 524.8c-11.52 0-24.32 12.8-24.32 24.32 0 12.8 12.8 24.32 24.32 24.32 17.92 0 30.72-11.52 30.72-24.32 0-11.52-12.8-24.32-30.72-24.32zM331.52 346.88c-17.92 0-37.12 11.52-37.12 30.72 0 17.92 17.92 30.72 37.12 30.72 17.92 0 30.72-12.8 30.72-30.72 0-17.92-12.8-30.72-30.72-30.72z" fill="#66C72A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-activty-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M58.937 298.365c0 0 143.949 25.407 323.454-13.544 0 0 81.294-22.016 149.029 17.782 0 0 121.933 49.112 30.483 174.433 0 0-219.582 328.819-508.609 433.813 0 0-82.42 62.094 18.06 29.356 100.485-32.744 202.092-91.443 390.633-199.825 0 0 342.085-247.259 286.197-386.126 0 0-37.252-150.718-204.91-150.718 0 0-78.748-0.849-138.866 14.393 0 0-68.583 12.704-131.247 27.945 0 0-150.72 16.932-204.062 11.853C69.099 257.726-77.106 251.235 58.937 298.365L58.937 298.365zM58.937 298.365" fill="#fb8041" ></path>' +
    '' +
    '<path d="M717.144 548.438c0 0-74.518 95.971-136.604 136.617 0 0-20.32 28.229 21.447 16.933 0 0 211.121-111.776 383.857 29.356 0 0 65.488 34.998 22.581-29.356 0 0-75.645-126.447-174.997-146.768C833.428 555.213 784.885 536.021 717.144 548.438L717.144 548.438zM717.144 548.438" fill="#fb8041" ></path>' +
    '' +
    '<path d="M854.882 164.58c0 49.884-40.439 90.321-90.323 90.321-49.87 0-90.316-40.438-90.316-90.321 0-49.878 40.446-90.317 90.316-90.317C814.442 74.263 854.882 114.702 854.882 164.58L854.882 164.58zM854.882 164.58" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-stadium-off-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.209 673.764c-146.842 92.283-236.831 136.049-373.043 131.523-136.212-4.506-483.123-247.173-483.369-294.625-0.266-47.473 3.052-76.841 21.012-115.753 56.402 72.786 281.948 226.202 493.896 242.012 211.948 15.811 429.691-145.859 420.332-194.662 23.491 74.752 68.014 139.223-78.828 231.506zM589.223 589.592c-143.442-6.431-450.089-130.601-493.896-210.452-20.828-64.84 233.062-142.766 362.537-131.543s488.243 106.885 493.896 163.103c5.632 56.218-219.116 185.303-362.537 178.893zM342.275 294.946c-12.145-7.291-59.515 10.179-64.655 19.907-5.14 9.748 40.673 56.791 47.882 58.86 7.209 2.089 46.203-10.076 48.292-15.647 2.089-5.53-19.374-55.828-31.519-63.119zM377.767 284.337c-7.004 6.615 31.846 65.024 38.072 68.485s105.697-3.359 110.326-5.263c4.649-1.905 25.743-31.601 23.552-58.86-21.524-22.958-164.946-10.977-171.95-4.362zM582.383 293.062c-8.376 1.925-23.429 59.638-19.436 65.024s52.552 15.79 52.552 15.79 34.324-55.276 31.519-63.14-56.259-19.599-64.635-17.674zM686.872 321.406c-6.963 2.519-31.662 64.082-29.348 68.26 2.314 4.157 46.346 18.309 52.552 15.79 6.205-2.519 42.476-49.93 39.936-57.876-2.56-7.946-56.197-28.692-63.14-26.173zM773.113 363.349c-24.392 75.244-162.427 107.438-241.684 105.226-79.258-2.212-224.952-72.008-283.73-136.786 0 0-57.303-5.55-42.025 36.823 15.258 42.394 250.941 126.853 352.031 136.786s222.003-60.662 252.191-84.173c30.188-23.511 4.403-48.497-36.782-57.876z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-find-off-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.666667 341.333333m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z" fill="#333333" ></path>' +
    '' +
    '<path d="M512 341.333333c25.6 0 42.666667-17.066667 42.666667-42.666666s-17.066667-42.666667-42.666667-42.666667c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256c0-25.6-17.066667-42.666667-42.666667-42.666667s-42.666667 17.066667-42.666666 42.666667c0 93.866667-76.8 170.666667-170.666667 170.666667s-170.666667-76.8-170.666667-170.666667 76.8-170.666667 170.666667-170.666667z" fill="#333333" ></path>' +
    '' +
    '<path d="M512 0C422.4 0 332.8 25.6 256 68.266667c-21.333333 12.8-25.6 38.4-17.066667 59.733333 12.8 21.333333 38.4 25.6 59.733334 12.8C362.666667 106.666667 435.2 85.333333 512 85.333333c234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667S85.333333 746.666667 85.333333 512c0-76.8 21.333333-149.333333 55.466667-213.333333 12.8-21.333333 4.266667-46.933333-12.8-59.733334s-46.933333-4.266667-59.733333 17.066667C25.6 332.8 0 422.4 0 512c0 281.6 230.4 512 512 512s512-230.4 512-512S793.6 0 512 0z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-me-off-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.359952 509.48369c-125.273145 0-227.134067-101.916181-227.134067-227.136114 0-125.272122 101.860922-227.186256 227.134067-227.186256 125.217886 0 227.134067 101.915158 227.134067 227.186256C749.494019 407.567509 647.577838 509.48369 522.359952 509.48369L522.359952 509.48369zM522.359952 105.653295c-97.426937 0-176.695305 79.266321-176.695305 176.694281 0 97.430006 79.268368 176.643116 176.695305 176.643116 97.428983 0 176.643116-79.212086 176.643116-176.643116C699.003068 184.919617 619.788935 105.653295 522.359952 105.653295L522.359952 105.653295zM196.865693 862.823134l30.03506-270.186605 140.260487-56.128345 18.764366 46.880727-112.200408 44.856627-20.458961 184.138834L802.613844 812.384371l-20.458961-184.138834-112.147196-44.856627 18.763342-46.880727 140.210345 56.128345 30.03199 270.186605L196.865693 862.823134 196.865693 862.823134z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)