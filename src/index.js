(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body33208', 'model/Body33208Producer', 'model/Body33208ScriptWriter', 'model/Body33208Team', 'model/Body33210', 'model/Body33212', 'model/Body33213', 'model/Body33214', 'model/Body33215', 'model/Body33216', 'model/Body33217', 'model/Body33218', 'model/Body33220', 'model/Body33221', 'model/Body33222', 'model/Body33223', 'model/Body33225', 'model/IdMap', 'model/Pitches', 'model/PitchesResult', 'model/PitchesResultPitches', 'model/PitchesResultPitchesItems', 'model/Renditions', 'model/RenditionsResult', 'model/RenditionsResultRenditions', 'model/RenditionsResultRenditionsItems', 'model/Response33228', 'model/Response33228Result', 'model/Response33228ResultPitches', 'model/Response33228ResultPitchesItemsSchema', 'model/Response33230', 'model/Response33230Result', 'model/Response33230ResultProjects', 'model/Response33234', 'model/Response33235', 'model/Response33235Result', 'model/Response33235ResultProducer', 'model/Response33235ResultScriptWriter', 'model/Response33235ResultTeam', 'model/Response33242', 'model/Response33243', 'model/Response33247', 'model/Response33247Result', 'model/Response33249', 'model/Teams', 'model/TeamsResult', 'model/TeamsResultTeams', 'model/TeamsResultTeamsItems', 'model/Users', 'model/UsersResult', 'model/UsersResultUsers', 'model/UsersResultUsersItems', 'api/CommandsApi', 'api/PitchesApi', 'api/ProjectsApi', 'api/RenditionsApi', 'api/TeamsApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Body33208'), require('./model/Body33208Producer'), require('./model/Body33208ScriptWriter'), require('./model/Body33208Team'), require('./model/Body33210'), require('./model/Body33212'), require('./model/Body33213'), require('./model/Body33214'), require('./model/Body33215'), require('./model/Body33216'), require('./model/Body33217'), require('./model/Body33218'), require('./model/Body33220'), require('./model/Body33221'), require('./model/Body33222'), require('./model/Body33223'), require('./model/Body33225'), require('./model/IdMap'), require('./model/Pitches'), require('./model/PitchesResult'), require('./model/PitchesResultPitches'), require('./model/PitchesResultPitchesItems'), require('./model/Renditions'), require('./model/RenditionsResult'), require('./model/RenditionsResultRenditions'), require('./model/RenditionsResultRenditionsItems'), require('./model/Response33228'), require('./model/Response33228Result'), require('./model/Response33228ResultPitches'), require('./model/Response33228ResultPitchesItemsSchema'), require('./model/Response33230'), require('./model/Response33230Result'), require('./model/Response33230ResultProjects'), require('./model/Response33234'), require('./model/Response33235'), require('./model/Response33235Result'), require('./model/Response33235ResultProducer'), require('./model/Response33235ResultScriptWriter'), require('./model/Response33235ResultTeam'), require('./model/Response33242'), require('./model/Response33243'), require('./model/Response33247'), require('./model/Response33247Result'), require('./model/Response33249'), require('./model/Teams'), require('./model/TeamsResult'), require('./model/TeamsResultTeams'), require('./model/TeamsResultTeamsItems'), require('./model/Users'), require('./model/UsersResult'), require('./model/UsersResultUsers'), require('./model/UsersResultUsersItems'), require('./api/CommandsApi'), require('./api/PitchesApi'), require('./api/ProjectsApi'), require('./api/RenditionsApi'), require('./api/TeamsApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, Body33208, Body33208Producer, Body33208ScriptWriter, Body33208Team, Body33210, Body33212, Body33213, Body33214, Body33215, Body33216, Body33217, Body33218, Body33220, Body33221, Body33222, Body33223, Body33225, IdMap, Pitches, PitchesResult, PitchesResultPitches, PitchesResultPitchesItems, Renditions, RenditionsResult, RenditionsResultRenditions, RenditionsResultRenditionsItems, Response33228, Response33228Result, Response33228ResultPitches, Response33228ResultPitchesItemsSchema, Response33230, Response33230Result, Response33230ResultProjects, Response33234, Response33235, Response33235Result, Response33235ResultProducer, Response33235ResultScriptWriter, Response33235ResultTeam, Response33242, Response33243, Response33247, Response33247Result, Response33249, Teams, TeamsResult, TeamsResultTeams, TeamsResultTeamsItems, Users, UsersResult, UsersResultUsers, UsersResultUsersItems, CommandsApi, PitchesApi, ProjectsApi, RenditionsApi, TeamsApi, UsersApi) {
  'use strict';

  /**
   * Compojure Api example.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var NowthisServerCljs = require('index'); // See note below*.
   * var xxxSvc = new NowthisServerCljs.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new NowthisServerCljs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new NowthisServerCljs.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new NowthisServerCljs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Body33208 model constructor.
     * @property {module:model/Body33208}
     */
    Body33208: Body33208,
    /**
     * The Body33208Producer model constructor.
     * @property {module:model/Body33208Producer}
     */
    Body33208Producer: Body33208Producer,
    /**
     * The Body33208ScriptWriter model constructor.
     * @property {module:model/Body33208ScriptWriter}
     */
    Body33208ScriptWriter: Body33208ScriptWriter,
    /**
     * The Body33208Team model constructor.
     * @property {module:model/Body33208Team}
     */
    Body33208Team: Body33208Team,
    /**
     * The Body33210 model constructor.
     * @property {module:model/Body33210}
     */
    Body33210: Body33210,
    /**
     * The Body33212 model constructor.
     * @property {module:model/Body33212}
     */
    Body33212: Body33212,
    /**
     * The Body33213 model constructor.
     * @property {module:model/Body33213}
     */
    Body33213: Body33213,
    /**
     * The Body33214 model constructor.
     * @property {module:model/Body33214}
     */
    Body33214: Body33214,
    /**
     * The Body33215 model constructor.
     * @property {module:model/Body33215}
     */
    Body33215: Body33215,
    /**
     * The Body33216 model constructor.
     * @property {module:model/Body33216}
     */
    Body33216: Body33216,
    /**
     * The Body33217 model constructor.
     * @property {module:model/Body33217}
     */
    Body33217: Body33217,
    /**
     * The Body33218 model constructor.
     * @property {module:model/Body33218}
     */
    Body33218: Body33218,
    /**
     * The Body33220 model constructor.
     * @property {module:model/Body33220}
     */
    Body33220: Body33220,
    /**
     * The Body33221 model constructor.
     * @property {module:model/Body33221}
     */
    Body33221: Body33221,
    /**
     * The Body33222 model constructor.
     * @property {module:model/Body33222}
     */
    Body33222: Body33222,
    /**
     * The Body33223 model constructor.
     * @property {module:model/Body33223}
     */
    Body33223: Body33223,
    /**
     * The Body33225 model constructor.
     * @property {module:model/Body33225}
     */
    Body33225: Body33225,
    /**
     * The IdMap model constructor.
     * @property {module:model/IdMap}
     */
    IdMap: IdMap,
    /**
     * The Pitches model constructor.
     * @property {module:model/Pitches}
     */
    Pitches: Pitches,
    /**
     * The PitchesResult model constructor.
     * @property {module:model/PitchesResult}
     */
    PitchesResult: PitchesResult,
    /**
     * The PitchesResultPitches model constructor.
     * @property {module:model/PitchesResultPitches}
     */
    PitchesResultPitches: PitchesResultPitches,
    /**
     * The PitchesResultPitchesItems model constructor.
     * @property {module:model/PitchesResultPitchesItems}
     */
    PitchesResultPitchesItems: PitchesResultPitchesItems,
    /**
     * The Renditions model constructor.
     * @property {module:model/Renditions}
     */
    Renditions: Renditions,
    /**
     * The RenditionsResult model constructor.
     * @property {module:model/RenditionsResult}
     */
    RenditionsResult: RenditionsResult,
    /**
     * The RenditionsResultRenditions model constructor.
     * @property {module:model/RenditionsResultRenditions}
     */
    RenditionsResultRenditions: RenditionsResultRenditions,
    /**
     * The RenditionsResultRenditionsItems model constructor.
     * @property {module:model/RenditionsResultRenditionsItems}
     */
    RenditionsResultRenditionsItems: RenditionsResultRenditionsItems,
    /**
     * The Response33228 model constructor.
     * @property {module:model/Response33228}
     */
    Response33228: Response33228,
    /**
     * The Response33228Result model constructor.
     * @property {module:model/Response33228Result}
     */
    Response33228Result: Response33228Result,
    /**
     * The Response33228ResultPitches model constructor.
     * @property {module:model/Response33228ResultPitches}
     */
    Response33228ResultPitches: Response33228ResultPitches,
    /**
     * The Response33228ResultPitchesItemsSchema model constructor.
     * @property {module:model/Response33228ResultPitchesItemsSchema}
     */
    Response33228ResultPitchesItemsSchema: Response33228ResultPitchesItemsSchema,
    /**
     * The Response33230 model constructor.
     * @property {module:model/Response33230}
     */
    Response33230: Response33230,
    /**
     * The Response33230Result model constructor.
     * @property {module:model/Response33230Result}
     */
    Response33230Result: Response33230Result,
    /**
     * The Response33230ResultProjects model constructor.
     * @property {module:model/Response33230ResultProjects}
     */
    Response33230ResultProjects: Response33230ResultProjects,
    /**
     * The Response33234 model constructor.
     * @property {module:model/Response33234}
     */
    Response33234: Response33234,
    /**
     * The Response33235 model constructor.
     * @property {module:model/Response33235}
     */
    Response33235: Response33235,
    /**
     * The Response33235Result model constructor.
     * @property {module:model/Response33235Result}
     */
    Response33235Result: Response33235Result,
    /**
     * The Response33235ResultProducer model constructor.
     * @property {module:model/Response33235ResultProducer}
     */
    Response33235ResultProducer: Response33235ResultProducer,
    /**
     * The Response33235ResultScriptWriter model constructor.
     * @property {module:model/Response33235ResultScriptWriter}
     */
    Response33235ResultScriptWriter: Response33235ResultScriptWriter,
    /**
     * The Response33235ResultTeam model constructor.
     * @property {module:model/Response33235ResultTeam}
     */
    Response33235ResultTeam: Response33235ResultTeam,
    /**
     * The Response33242 model constructor.
     * @property {module:model/Response33242}
     */
    Response33242: Response33242,
    /**
     * The Response33243 model constructor.
     * @property {module:model/Response33243}
     */
    Response33243: Response33243,
    /**
     * The Response33247 model constructor.
     * @property {module:model/Response33247}
     */
    Response33247: Response33247,
    /**
     * The Response33247Result model constructor.
     * @property {module:model/Response33247Result}
     */
    Response33247Result: Response33247Result,
    /**
     * The Response33249 model constructor.
     * @property {module:model/Response33249}
     */
    Response33249: Response33249,
    /**
     * The Teams model constructor.
     * @property {module:model/Teams}
     */
    Teams: Teams,
    /**
     * The TeamsResult model constructor.
     * @property {module:model/TeamsResult}
     */
    TeamsResult: TeamsResult,
    /**
     * The TeamsResultTeams model constructor.
     * @property {module:model/TeamsResultTeams}
     */
    TeamsResultTeams: TeamsResultTeams,
    /**
     * The TeamsResultTeamsItems model constructor.
     * @property {module:model/TeamsResultTeamsItems}
     */
    TeamsResultTeamsItems: TeamsResultTeamsItems,
    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users: Users,
    /**
     * The UsersResult model constructor.
     * @property {module:model/UsersResult}
     */
    UsersResult: UsersResult,
    /**
     * The UsersResultUsers model constructor.
     * @property {module:model/UsersResultUsers}
     */
    UsersResultUsers: UsersResultUsers,
    /**
     * The UsersResultUsersItems model constructor.
     * @property {module:model/UsersResultUsersItems}
     */
    UsersResultUsersItems: UsersResultUsersItems,
    /**
     * The CommandsApi service constructor.
     * @property {module:api/CommandsApi}
     */
    CommandsApi: CommandsApi,
    /**
     * The PitchesApi service constructor.
     * @property {module:api/PitchesApi}
     */
    PitchesApi: PitchesApi,
    /**
     * The ProjectsApi service constructor.
     * @property {module:api/ProjectsApi}
     */
    ProjectsApi: ProjectsApi,
    /**
     * The RenditionsApi service constructor.
     * @property {module:api/RenditionsApi}
     */
    RenditionsApi: RenditionsApi,
    /**
     * The TeamsApi service constructor.
     * @property {module:api/TeamsApi}
     */
    TeamsApi: TeamsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
