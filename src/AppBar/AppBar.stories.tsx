/*
 * Copyright (c) 2024 The Ontario Institute for Cancer Research. All rights reserved
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

import {
	AppBar,
	DropdownMenu,
	DropdownMenuItem,
	Logo,
	MenuGroup,
	AppBarMenuItem as MenuItem,
	NavBarElement,
	Section,
	UserBadge,
} from '.';

export default {
	component: AppBar,
};

// to simulate nextjs link or any other framework that needs to wrap href
const CustomLink = (props) => <div {...props}>{props.children}</div>;

export const Basic = {
	render: (args) => {
		const LinkToHome = (props) => (
			<a style={{ cursor: 'pointer' }} {...props} onClick={() => console.log('fake navigate')} />
		);

		const LinkToExploration = (props) => (
			<a {...props} onClick={() => console.log('fake navigate')} />
		);

		const LinkToAnalysis = (props) => <a {...props} onClick={() => console.log('fake navigate')} />;

		const LinkToFileRepo = (props) => <a {...props} onClick={() => console.log('fake navigate')} />;

		const LinkToSubmission = (props) => (
			<a {...props} onClick={() => console.log('fake navigate')} />
		);

		const UserBadgeDom = (props) => <a {...props} onClick={console.log('user badge clicked')} />;

		return (
			<AppBar>
				<Section>
					<Logo DomComponent={LinkToHome} />
					<MenuGroup>
						<MenuItem>Exploration</MenuItem>
						<MenuItem>Analysis</MenuItem>
						<MenuItem active>File Repository</MenuItem>
					</MenuGroup>
				</Section>
				<Section />
				<Section>
					<MenuGroup>
						<MenuItem active>Submission System</MenuItem>
						<MenuItem>
							<DropdownMenu>
								<DropdownMenuItem active>Profile & Tokens</DropdownMenuItem>
								<DropdownMenuItem>Logout</DropdownMenuItem>
							</DropdownMenu>

							<UserBadge firstName="Harvey" lastName="Specter" title="DCC Member" />
						</MenuItem>
					</MenuGroup>
				</Section>
			</AppBar>
		);
	},
};

export const NavBarElementStory = () => (
	<NavBarElement name="custom link comp" href="www.google.ca" LinkComp={CustomLink} active />
);
