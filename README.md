<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/0xsarwagya/vibestart.git">
    <img src="https://raw.githubusercontent.com/0xsarwagya/vibestart/refs/heads/main/.github/assets/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">
    Vibestart
  </h3>
  <p align="center">
    A free, open space for Indian hip-hop artists to join online e-cyphers, share their work, and connect.
    <br />
    <a href="https://github.com/0xsarwagya/vibestart.git"><strong>Check the details »</strong></a>
    <br />
    <br />
    <a href="https://vibestart.xyz?ref=github_repo">View Demo</a>
    ·
    <a href="https://github.com/0xsarwagya/vibestart/issues/new?labels=bug&template=bug_report.md">Report a problem</a>
    ·
    <a href="https://github.com/0xsarwagya/vibestart/issues/new?labels=enhancement&template=feature_request.md">Share an idea</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<div align="left">
  <h2 align="left">
  Table of Contents
  </h2>
  <ul>
    <li>
    <a href="#built-with">
      Built With
    </a>
    </li>
    <li>
    <a href="#getting-started">
      Getting Started
    </a>
    </li>
    <li>
    <a href="#roadmap">
      Roadmap
    </a>
    </li>
    <li>
    <a href="#contributing">
      Contributing
    </a>
    </li>
    <li>
    <a href="#license">
      License
    </a>
    </li>
    <li>
    <a href="#contact">
      Contact
    </a>
    </li>
     <li>
    <a href="#acknowledgments">
      Acknowledgments
    </a>
    </li>
  </ul>
</div>

<div align="left" id="built-with">
  <h2 align="left">
    Built With
  </h2>
  <div style="display: flex; flex-wrap: inline; gap: 10px; align-items: center;">
    <div style="display: flex; flex-direction: column; align-items: center; width: 100px;">
      <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="Next.js" width="64">
      <p style="text-align: center; font-size: 12px;">Next.js</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: 100px;">
      <img src="https://authjs.dev/img/etc/logo-sm.webp" alt="Auth.js" width="64">
      <p style="text-align: center; font-size: 12px;">Auth.js</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: 100px;">
      <img src="https://www.gstatic.com/devrel-devsite/prod/v6f23042ee535b54d461e0cc5c1cc12493e4d0aea4f2d54a7a63063da7859ead0/firebase/images/touchicon-180.png" alt="Firebase" width="64">
      <p style="text-align: center; font-size: 12px;">Firebase</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: 100px;">
      <img src="https://rebackk.xyz/_next/image?url=%2Fimages%2FdarkBG.png&w=64&q=75" alt="Rebackk" width="64">
      <p style="text-align: center; font-size: 12px;">Rebackk</p>
    </div>

  </div>
</div>

<div align="left" id="getting-started">
  <h2 align="left">
    Getting Started
  </h2>
  <h4>
    Prerequisites
  </h4>
  <p>
    Ensure you have the following tools installed:
    <ol>
    <li>
    <b>Node.js</b>: Version 22.8.0 (or a compatible version specified in the engines field).
    </li>
    <li>
    <b>npm</b>: Version 10.9.1 (or a compatible version specified in the engines field).
    </li>
    </ol>
    You can check your versions by running:
    <pre><code class="lang-bash"><span class="hljs-keyword">node</span> <span class="hljs-title">-v</span></code></pre>
    <pre><code class="lang-bash"><span class="hljs-keyword">npm</span> <span class="hljs-title">-v</span></code></pre>
  </p>
  <p>
  If you need to install or update Node.js and npm, consider using a version manager like <a href="https://github.com/nvm-sh/nvm">nvm</a>.
  </p>
  <h4>
    Installation Steps
  </h4>
  <p>
  <ol>
    <li>
      Clone The Github Repository
      <pre><code class="lang-bash">git <span class="hljs-keyword">clone</span> <span class="hljs-title">https</span>://github.com/<span class="hljs-number">0</span>xsarwagya/vibestart.git
</code></pre>
    </li>
    <li>
    Change The Directory into the vibestart directory
    <pre><code class="lang-bash"><span class="hljs-built_in">cd</span> vibestart
</code></pre>
    </li>
    <li>
    Install the project dependencies
    <pre><code class="lang-bash">npm <span class="hljs-keyword">install</span>
</code></pre>
    </li>
  </ol>
  </p>
    <h4>
      Scripts and Usage
  </h4>
  <p>
  <ol>
    <li>
    Start the Development Server:
      <pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> dev</span>
</code></pre>
This starts the Next.js development server at http://localhost:3000
    </li>
    <li>
    Build for Production:
     <pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> build</span>
</code></pre>
     This compiles the application into an optimized production build.
    </li>
    <li>
Run the Production Server: After building, start the server:
     <pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> start</span>
</code></pre>
This starts the Next.js app at http://localhost:3000
    </li>
    <li>
    Lint the Code: To lint and auto-correct:
         <pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> lint</span>
</code></pre>
To check for linting errors without auto-correction:
         <pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> lint:check</span>
</code></pre>
    </li>
  </ol>
  </p>
</div> 

<div align="left" id="roadmap">
  <h2 align="left">
  Roadmap
  </h2>
  <h3>
  Coming Soon
  </h3>
</div>

<div align="left" id="contributing">
  <h2 align="left">
    Contributing
  </h2>
  Check out <a href="https://github.com/0xsarwagya/vibestart/blob/main/CONTRIBUTING.md"><b>CONTRIBUTING GUIDE</b></a> to learn how to contribute to the project.
</div>

<div align="left" id="license">
  <h2 align="left">
      License
  </h2>
  This Project is Licensed under Apache-2.0 License.
  Check <a href="https://github.com/0xsarwagya/vibestart/blob/main/LICENSE">LICENSE</a> for full License
</div>

<div align="left" id="contact">
  <h2 align="left">
    Contact
  </h2>
  <a href="mailto:contact@0xsarwagya.codes">
    contact@0xsarwagya.codes
  </a>
  <br />
  <a href="https://x.com/0xsarwagya">
  https://x.com/0xsarwagya
  </a>
</div>

<div align="left" id="acknowledgments">
  <h2 align="left">
    Acknowledgments
  </h2>
  <h3>
  Updating Soon
  </h3>
</div>
