<template>
    <main id="main-body">
        <section id="demo">
            <slot name="demo"></slot>
        </section>
        <section id="code">
            <div id="schema">
                <h3>Schema</h3>
                <div class="content">
                    <slot name="schema"></slot>
                </div>
            </div>
            <div id="state">
                <h3>State</h3>
                <div class="content">
                    <slot name="state"></slot>
                </div>
            </div>
            <div id="events">
                <h3>Events</h3>
                <div class="content">
                    <slot name="events"></slot>
                </div>
            </div>
            <div id="component-map">
                <h3>Component Map</h3>
                <div class="content">
                    <slot name="component-map"></slot>
                </div>
            </div>
        </section>
    </main>
</template>
<style>
main#main-body {
  display: flex;
  height: calc(100vh - 54px);
}
#demo {
  background-color: #FbF7F5;
  flex: 1;
  overflow: auto;
  background-image: url('/vue-page-craft/img/background-pattern.jpg');
  background-repeat: repeat;
  background-blend-mode: lighten;
}
#code {
  flex: 1
}
#schema {
  background-color: rgb(195, 255, 147, 0.6);
  height: 40%;
  min-height: 250px;
  padding: 15px 0 15px 15px;
  overflow: hidden;
}
#state, #events, #component-map {
  height: 20%;
  min-height: 150px;
  padding: 15px 0 15px 15px;
  overflow: hidden;
}
@media(max-width: 768px) {
    main#main-body {
        display: block;
        height: auto;
    }
    #demo {
      height: calc(50vh - 27px);
    }
    #schema {
      height: 35vh;
    }
}
.content {
  overflow: auto;
  height: calc(100% - 20px);
}
#state {
  background-color: rgba(255, 219, 92, 0.6);
}
#state b {
  color: rgb(255, 219, 92);
  filter: brightness(0.6);
}
#events {
  background-color: rgba(255, 175, 97, 0.6);
}
#events b {
  color: rgb(255, 175, 97);
  filter: brightness(0.6);
}
#component-map {
  background-color: rgba(255, 112, 171, 0.6);
}
#component-map b {
  color: rgb(255, 112, 171);
  filter: brightness(0.6);
}
</style>