/*
 * Copyright (c) 2020 The Ontario Institute for Cancer Research. All rights reserved
 *
 * This program and the accompanying materials are made available under the terms of
 * the GNU Affero General Public License v3.0. You should have received a copy of the
 * GNU Affero General Public License along with this program.
 *  If not, see <http://www.gnu.org/licenses/>.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { css } from '@emotion/core';

export default {
  title: 'workflow',
  viewBox: '7 11 26 18',
  path:
    'M9.60002708,15.2940341 C10.3583604,15.2940341 10.9812771,14.6399716 10.9812771,13.8437216 C10.9812771,13.0474716 10.3583604,12.3934091 9.60002708,12.3934091 C8.84169375,12.3934091 8.21877708,13.0474716 8.21877708,13.8437216 C8.21877708,14.6399716 8.84169375,15.2940341 9.60002708,15.2940341 Z M19.2687771,14.4977841 L12.1187771,14.4977841 C11.8479437,15.6921591 10.8187771,16.5737216 9.60002708,16.5737216 C8.16461042,16.5737216 7.00002708,15.3509091 7.00002708,13.8437216 C7.00002708,12.3365341 8.16461042,11.1137216 9.60002708,11.1137216 C10.8187771,11.1137216 11.8479437,11.9952841 12.1187771,13.1896591 L19.2687771,13.1896591 L18.7812771,12.7062216 C18.5375271,12.4787216 18.5104437,12.0521591 18.7541937,11.7962216 C18.9708604,11.5402841 19.3771104,11.5118466 19.6208604,11.7677841 L21.2729437,13.3602841 C21.3812771,13.5024716 21.4625271,13.6730966 21.4625271,13.8437216 C21.4625271,14.0427841 21.4083604,14.2134091 21.2729437,14.3271591 L19.6208604,15.9196591 C19.5125271,16.0334091 19.3771104,16.0902841 19.2146104,16.0902841 C19.0521104,16.0902841 18.8625271,16.0334091 18.7541937,15.8912216 C18.5104437,15.6352841 18.5375271,15.2371591 18.7812771,14.9812216 L19.2687771,14.4977841 Z M25.4436417,15.0895563 C26.2022458,15.0895563 26.8251625,14.4666396 26.8251625,13.7083063 C26.8251625,12.9499729 26.2022458,12.3270563 25.4436417,12.3270563 C24.6853083,12.3270563 24.0623917,12.9499729 24.0623917,13.7083063 C24.0623917,14.4666396 24.6853083,15.0895563 25.4436417,15.0895563 Z M25.4436417,11.1083063 C26.8793292,11.1083063 28.070725,12.2728896 28.070725,13.7083063 C28.070725,15.1437229 26.9061417,16.3083063 25.4709958,16.3083063 C24.9561417,16.3083063 24.5230792,16.1728896 24.1168292,15.9291396 L19.051975,20.9937229 L19.7290583,20.9666396 C20.0811417,20.9666396 20.351975,21.2103896 20.3793292,21.5624729 C20.3793292,21.9145563 20.1353083,22.1853896 19.7834958,22.2124729 L17.5353083,22.2937229 L17.508225,22.2937229 C17.3459958,22.2937229 17.183225,22.2124729 17.0751625,22.1041396 C16.9397458,21.9958063 16.8853083,21.8062229 16.8853083,21.6437229 L16.9665583,19.3687229 C16.9936417,19.0166396 17.264475,18.7728896 17.6168292,18.7728896 C17.9686417,18.7999729 18.239475,19.0708063 18.2123917,19.4228896 L18.1853083,20.0999729 L23.2230792,15.0624729 C22.9790583,14.6562229 22.8436417,14.1958063 22.8436417,13.7083063 C22.8436417,12.2728896 24.008225,11.1083063 25.4436417,11.1083063 Z M14.5042135,26.7294922 C15.2710674,26.7294922 15.8735955,26.0481771 15.9009831,25.21875 C15.9009831,24.3896191 15.2710674,23.7080078 14.5042135,23.7080078 C13.7373596,23.7080078 13.1074438,24.3896191 13.1074438,25.21875 C13.1074438,26.0481771 13.7373596,26.7294922 14.5042135,26.7294922 Z M24.6102528,23.0566113 L26.3082865,24.7151693 C26.4178371,24.8632812 26.5,25.0113932 26.5,25.21875 C26.5,25.426403 26.4452247,25.6038411 26.3082865,25.722627 L24.6376404,27.3811849 C24.5280899,27.4999707 24.3911517,27.5589193 24.2268258,27.5589193 C24.0625,27.5589193 23.8707865,27.4999707 23.761236,27.3518587 C23.5147472,27.0849609 23.5421348,26.6702474 23.7886236,26.4036458 L24.2816011,25.9000651 L17.051264,25.9000651 C16.7773876,27.1442057 15.7366573,28.0625 14.5042135,28.0625 C13.0526685,28.0625 11.875,26.788737 11.875,25.21875 C11.875,23.6490592 13.0526685,22.375 14.5042135,22.375 C15.7366573,22.375 16.7773876,23.2932943 17.051264,24.5377311 L24.2542135,24.5377311 L23.761236,24.0338542 C23.5147472,23.7971712 23.4873596,23.3528353 23.7338483,23.0859375 C23.9529494,22.8193359 24.363764,22.7897135 24.6102528,23.0566113 Z M30.2701137,26.7827556 C31.0663637,26.7827556 31.6919887,26.1286931 31.7204262,25.3324431 C31.7204262,24.5364775 31.0663637,23.8821306 30.2701137,23.8821306 C29.4735794,23.8821306 28.8195169,24.5364775 28.8195169,25.3324431 C28.8195169,26.1286931 29.4735794,26.7827556 30.2701137,26.7827556 Z M30.2701137,22.6024431 C31.7773012,22.6024431 33.0001137,23.82554 33.0001137,25.3324431 C33.0001137,26.8396306 31.7773012,28.0624431 30.2701137,28.0624431 C28.7626419,28.0624431 27.5398294,26.8396306 27.5398294,25.3324431 C27.5398294,23.82554 28.7626419,22.6024431 30.2701137,22.6024431 Z',

  css: css`
    height: 18px;
    width: 26px;
  `,
};