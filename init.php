<?php
\Larakit\StaticFiles\Manager::package('larakit/sf-angular-ui-tree')
                            ->usePackage('larakit/sf-angular')
                            ->setSourceDir('public')
                            ->ngModule('ui.tree')
                            ->jsPackage('angular-ui-tree.js')
                            ->cssPackage('angular-ui-tree.css');
